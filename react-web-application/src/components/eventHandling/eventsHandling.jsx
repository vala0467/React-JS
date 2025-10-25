import { useState, useEvent } from "react";
import './eventHandling.css';

export function EventsHandling() {
    const [count, setCount] = useState(0);

    var categories = ['Electronics', 'Clothes', 'Footwear', 'Watches'];

    function getUSerDetails() {
        console.log("Frm get user details function");
    }

    function handleSaveDetails(event) {
        console.log(event);
        console.log("Frm save details function");
    }
    // function incrementValue() {
    //     setCount(count + 1);
    // }

    var handleClickonIncrement = (event) => {
        setCount(count + 1);
    }

    // var handleClickonIncrement = useEvent(() => {
    //     setCount(count + 1);
    // });

    var handleCategoryClick = (event, selectedCategory) => {
       console.log("Handle category click");
       console.log(event);
       console.log(selectedCategory);
    }

    return (
        <>
            <h1> Events Handling in React JS </h1>
            <button onClick={handleSaveDetails}>Save details</button>
            <br/>
            Count -> {count} <br/>
            <button onClick={handleClickonIncrement}>Increment</button>
            <ul>
                {
                    categories.map((catg, index) => (
                        // <li key={index} onClick={handleCategoryClick}>{catg}</li>
                        <li key={index} onClick={(event) => {handleCategoryClick(event, catg)}}>{catg}</li>
                    ))
                }
            </ul>
        </>
    )   
}

