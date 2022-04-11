import firebase from "firebase";
import React, { useState, createContext } from "react";
import { loginRequest, registerRequest } from "./authentification.service";


export const AuthentificationContext = createContext();

export const AuthentificationContextProvider = ({children}) => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [user, setUser] = useState("");

    firebase.auth().onAuthStateChanged((user_)=>{
        if(user_){
            setUser(user_);
            setLoading(false);
        }
        else
            setLoading(false);
    });
    const onLogin  = (email, password) =>{
            setLoading(true);
            loginRequest(email, password)
            .then((user_) =>{
                setLoading(false);
                setUser(user_);
                setError("");
                console.log("inside the first catch");
            }).catch((err)=>{
                setUser(null);
                setLoading(false);
                setError(err.toString());
            });
        
    };

    const onRegister = (email, password, repeatedPassword) => {
        setLoading(true);
        if(password !== repeatedPassword){
            setLoading(false);
            setError("repeated password not matching password!");
            return;
        }
        registerRequest(email, password)
        .then((user_)=>{
            setUser(user_);
            setLoading(false);
            setError("");
        })
        .catch((err)=>{
            setUser(null);
            setLoading(false);
            setError(err.toString());
        })
    }

    const onLogout = () => {
        setLoading(false);
        firebase
        .auth()
        .signOut()
        .then(()=>{
            setUser(null);
            setError("");
        });
    };

    return (<AuthentificationContext.Provider value={{
        user,
        error,
        onLogin,
        isLoading,
        onRegister,
        onLogout,
    }}>
        {children}
    </AuthentificationContext.Provider>);
};