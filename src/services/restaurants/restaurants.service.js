import { mocks as mock, mockImages } from "./mock";
import camelize from "camelize";
export const restaurantsRequest = (location = ("41.878113,-87.629799")) =>(
    new Promise((resolve, reject) => {
        if(!mock[location])
            reject("not found");
        resolve(mock[location]);
    })
);
export const restaurantsTransfrom = ({ results = [] }) => {
    let mappedResults = (results.length != 0) && results.map((restaurant) => {
        restaurant.photos = restaurant.photos.map((photo)=>(
            mockImages[Math.floor(Math.random() * mockImages.length - 1)]
        ));
        return{
        ...restaurant,
        isOpen: restaurant.opening_hours && restaurant.opening_hours.open_now,
        isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
        };
    })
    return camelize(mappedResults);
};