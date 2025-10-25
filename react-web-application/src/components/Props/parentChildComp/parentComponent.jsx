import axios from "axios";
import { useEffect, useState } from "react";
import { RatingComp } from "./ratingComp";

export function ParentComponent() {
    const [productDetails, setProductDetails] = useState([]);   
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((response) => {
            console.log(response.data);
            setProductDetails(response.data);
        }).catch(() => {    });
    }, []);

    return (
        <>
            <h2>Parent Component</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>    
                        <th>Sno</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Details</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {productDetails.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.title}</td>
                            <td><img src={item.image} alt={item.title} width="50" height="50"/></td>
                            <td>{item.description}</td>
                            <td>
                                <RatingComp rating={item.rating.rate}></RatingComp>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}