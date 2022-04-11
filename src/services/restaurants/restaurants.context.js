import { isLoading } from "expo-font";
import React, { createContext, useEffect, useState, useContext } from "react";
import { restaurantsRequest, restaurantsTransfrom } from "./restaurants.service";
import { LocationContext } from "../location/location.context";
export const RestaurantsContext = createContext();


export const RestaurantsContextProvider = ({ children }) => {


    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { location } = useContext(LocationContext);


    const retrieveRestaurants = (loc) => {
        setLoading(true);
        setTimeout(() => {
            restaurantsRequest(loc)
            .then(restaurantsTransfrom)
            .then((result) => {
                setRestaurants(result);
                setLoading(false);
            })
            .catch((err) => {
                setError(err)
                setLoading(false);
                console.log(err);
            });
        }, 2000);
    };


    useEffect(()=>{
        if(location){
            console.log(location);
            const locationString = `${location.lat},${location.lng}`;
            retrieveRestaurants(locationString);
        }
    }, [location]);
    return (<RestaurantsContext.Provider value={{
        restaurants,
        isLoading,
        error,
    }} >
        {children}
    </RestaurantsContext.Provider>)
};