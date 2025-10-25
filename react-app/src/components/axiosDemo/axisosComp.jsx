import { useEffect, useState } from "react";
import axios from 'axios';
import './axisosDemo.css';
export function AxiosDemo() {   
    const [productDetails, setProductDetails] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState("1");
    
    useEffect(() =>{
        var allproductsUrl = 'https://fakestoreapi.com/products';
        // var singleProductUrl = 'https://fakestoreapi.com/products/' + selectedProduct;
         axios.get(allproductsUrl).then((result) => {
            setProductDetails(result.data);
        }).catch((err) => {
            console.log(err);
        });
        document.querySelector("#username").innerHTML = "PRASAD";
    }, [selectedProduct]);

    var setCountValue = (event) => {
        setSelectedProduct(event.target.value);
    }

    return (
        <>
            <h3>
                Product Details
            </h3>
            <div>User name is <span id="username"></span></div>
            <input type="text" value={selectedProduct} onChange={setCountValue} />
            <table className="table table-borderd table-striped"> 
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
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td><img src={details.image} className="productImage"/></td>
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