import * as firebase from "firebase";

export const loginRequest = (email, password) => {
    console.log(email, password);
    return (firebase
    .auth()
    .signInWithEmailAndPassword(email, password));
};

export const registerRequest = (email, password, repeatedPassword) => (
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
);