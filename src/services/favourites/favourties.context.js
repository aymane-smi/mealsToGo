import React, { createContext, useState, useEffect }from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);

    const saveFavourites = async (value) => {
        try{
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem("@favourites", jsonValue);
        }catch(err){
            console.log(err);
        }
    };

    const loadFavourites = async () => {
        try{
            const jsonValue = JSON.parse(await AsyncStorage.getItem("@favourites"));
            console.log(jsonValue);
            if(jsonValue !== null)
                setFavourites(jsonValue);
        }catch(err){
            console.log(err);
        }
    };

    useEffect(()=>{
        saveFavourites(favourites);
    }, [favourites]);

    useEffect(()=>{
        loadFavourites();
    }, []);

    const add = (restaurant) => {
        console.log("inside add");
        setFavourites([...favourites, restaurant]);
        saveFavourites(favourites);
    };

    const remove = (restaurant) => {
        console.log("inside remove");
        const newFavourites = favourites.filter((x) => x.placeId !== restaurant.placeId);
        setFavourites(newFavourites);
        saveFavourites(favourites);
    };

    return (<FavouritesContext.Provider value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove
    }}>
        {children}
    </FavouritesContext.Provider>)
};