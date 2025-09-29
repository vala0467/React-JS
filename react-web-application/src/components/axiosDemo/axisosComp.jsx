import { useState } from "react";
import axios from 'axios';
export function AxiosDemo() {
    // const [productDetails, setProductDetails] = useState([
    //     {
    //         title: 'ABC',
    //         price: 200,
    //         description: 'good one' ,
    //         image: 'abc.png'
    //     },
    //     {
    //         title: 'ABC',
    //         price: 200,
    //         description: 'good one' ,
    //         image: 'abc.png'
    //     }
    // ]);
    const [productDetails, setProductDetails] = useState();

    // fetch('https://fakestoreapi.com/products').then(resonse => resonse.json()).then((result) => {
    //     console.log('result')
    //     console.log(result)
    // })

    axios.get('https://fakestoreapi.com/products').then((result) => {
        console.log("result");
        console.log(result);
        setProductDetails(result.data);
    }).catch((err) => {
        console.log(err);
    });

    return (
        <>
            <h3>
                Product Details
            </h3>
            <table className="table table-borderd"> 
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Product Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productDetails.map((details, index) => (
                            <tr>
                                <td>{index}</td>
                                <td><img src={details.image} /></td>
                                <td>{details.title}</td>
                                <td>{details.price}</td>
                                <td>{details.description}</td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </>
    )
}