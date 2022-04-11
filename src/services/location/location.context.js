import React, { useState, createContext, useEffect } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({children}) => {

    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [location, setLoction] = useState(null);
    const [keyword, setKeyword] = useState("san francisco");

    const onSearch = (searchKeyword = "san francisco") => {
        setLoading(true);
        console.log(searchKeyword);
        if(!searchKeyword.length)
            return;
        setKeyword(searchKeyword);
        locationRequest(keyword.toLowerCase())
            .then(locationTransform)
            .then((result) => {
                setLoading(false);
                setLoction(result);
            })
            .catch((err) => {
                setLoading(false);
                setError(err);
                console.log(err);
            });
        console.log(keyword, location);
    };

    useEffect(()=>(
        onSearch()
    ), []);
    
    return (<LocationContext.Provider value={{
        isLoading,
        error,
        location,
        search : onSearch,
        keyword
    }}>
        {children}
    </LocationContext.Provider>);
};