import React, { useContext, useEffect, useState } from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { SearchMap } from "../components/search.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { LocationContext } from "../../../services/location/location.context";
import { View, Text } from "react-native";
import { MapCallout } from "../components/map-callout.component";


const Map = styled(MapView)`
height: 100%;
`;

export const MapScreen = ({ navigation }) =>{
    const { location } = useContext(LocationContext);
    const { restaurants = [] } = useContext(RestaurantsContext);
    const [latDelta, setLatDelta] = useState(0);
    const { lat, lng, viewport } = location;

    useEffect(()=>{
        const NorthEastLat = viewport.northeast.lat;
        const SouthWestLat = viewport.southwest.lat;
        setLatDelta(NorthEastLat - SouthWestLat);
    }, [location, viewport]);
    return (<>
        <SearchMap />
        <Map region={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: latDelta,
            longitudeDelta: 0.02,
        }}>
            {restaurants.map((restaurant) => {
                return (<Map.Marker
                            title={restaurant.name}
                            key={restaurant.name}
                            coordinate={{
                                latitude: restaurant.geometry.location.lat,
                                longitude: restaurant.geometry.location.lng,
                            }}
                        >
                            <Map.Callout onPress={() => navigation.navigate("RestaurantsDetails", {restaurant})}>
                                <MapCallout restaurant={restaurant} />
                            </Map.Callout>
                        </Map.Marker>);
            })}
        </Map>
    </>)
}