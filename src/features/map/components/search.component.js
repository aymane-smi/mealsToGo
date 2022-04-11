import React, {useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { View } from "react-native";
import { LocationContext } from "../../../services/location/location.context";



const SearchContainer = styled(View)`
    padding: ${(props) => props.theme.space[3]};
    width: 100%; 
    position: absolute;
    z-index: 999;
    top: 40px;
`;

export const SearchMap = () => {
    const {keyword, search} = useContext(LocationContext);
    const [searchInput, setSearch] = useState(keyword);
    console.log("input:",searchInput);
    useEffect(() => {
        setSearch(keyword);
    }, [keyword]);

    return (<SearchContainer>
        <Searchbar placeholder="Search for a location"
                   icon="map"
                   value={searchInput}
                   onSubmitEditing={() => (
                       search(searchInput)
                   )}
                   onChangeText={(text) =>(
                       setSearch(text)
                   )}
        />
    </SearchContainer>);
};