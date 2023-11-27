import { useState } from "react";
import { restaurants } from "./data";

function Restaurant() {

    const [restaurant, setRestaurant] = useState(0);
    const { id, name, description, addresse, image } = restaurants[restaurant];

    function previousResto() {
        setRestaurant((restaurant => {
            restaurant--;
            if (restaurant < 0) {
                return restaurants.length - 1;
            }
            return restaurant;
        })) 
    }

    function nextResto() {
        setRestaurant((restaurant => {
            restaurant++;
            if (restaurant > restaurants.length-1) {
               restaurant = 0;
            }
            return restaurant;
        })) 
    }
    return (
        <div>
            <div className="container">
                <h2>TOP 5 RESTAURANTS IN PARIS </h2>
            </div>

            <div className="container">
                <img src={image} width="600px" alt="resto"/>
            </div>

            <div className="container">
                <p>{ id } - { name }</p>
            </div>

            <div className="container">
                <p>{description}</p>
            </div>

            <div className="container">
                <p>{addresse}</p>
            </div>

            <div className="container">
                <button className="btn" onClick={previousResto}>Previous</button>
                <button className="btn" onClick={nextResto}>Next</button>
</div>
        </div>
    )
}

export default Restaurant