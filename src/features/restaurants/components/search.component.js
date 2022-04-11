import React, { useContext, useState, useEffect} from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { LocationContext } from "../../../services/location/location.context";
import { Searchbar } from "react-native-paper";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = ({ FavouriteToggle, onFavouriteToggle}) => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setKeyword] = useState(keyword);

    useEffect(()=>{
      setKeyword(keyword);
    }, [keyword]);

    return (
        <SearchContainer>
          <Searchbar
            icon={FavouriteToggle ? "heart" : "heart-outline"}
            onIconPress={onFavouriteToggle}
            placehodler="Search..."
            value={searchKeyword}
            onSubmitEditing={() => search(searchKeyword)}
            onChangeText={(text) => setKeyword(text)}
          />
        </SearchContainer>
    );
};