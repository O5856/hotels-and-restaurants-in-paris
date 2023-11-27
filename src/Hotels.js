import { useState } from "react";
import { hotels } from "./data";

function Hotels() {
    const [hotelsList, setHotels] = useState(hotels);

    const [showText, setShowText] = useState(false);

    const showTextClick = (hotel) => {
        hotel.showMore = !hotel.showMore;
        setShowText(!showText)
    }

    const clearAll = () => {
        setHotels([]);
}
    const removeHotel = (id) => {
        let newHotels = hotelsList.filter((hotel => hotel.id !== id));
        setHotels(newHotels)

    }
    return (
        <div>
            <div className="container">
                <h1> PARIS TOP {hotelsList.length} HOTELS</h1>
            </div>
            {hotelsList.map((hotel => {
                const { id, name, description, addresse, image, showMore } = hotel;

                return (
              
                    <div key={id}>
                        <div className="container">
                            <h2>{id} - {name}</h2>
                        </div>

                        <div className="container">
                            <p>{showMore ? description : description.substring(0, 120) + "...."}
                                <button onClick={() => showTextClick(hotel)}>{showMore ? "Show less" : "Show more"}</button>
                            </p>
                        </div>

                        <div className="container">
                            <p>{addresse}</p>
                        </div>

                        <div className="container">
                            <img src={image} width="500px" alt="hotel"/>
                        </div>

                        <div className="container">
                            <button className="btn" onClick={() => removeHotel(id)}>Remove</button>
                        </div>
                        </div>
                      
             
                )
            }))}
            <div className="container">
                <button className="btn" onClick={() => clearAll()}>Remove all</button>
            </div>
        </div>
    )
}

export default Hotels;