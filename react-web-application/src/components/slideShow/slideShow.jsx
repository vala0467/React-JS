import React, { useEffect, useState, useRef } from 'react';
import './slideShow.css';
import axios from 'axios';

export function SlideShowComp() {
    const[curntProduct, setCurntProduct] = useState({});
    const[productId, setProductId] = useState(1);
    const playSlideShowRef = useRef(null);

    useEffect(()=>{ 
        axios.get(`https://fakestoreapi.com/products/${productId}`)
        .then((response)=>{
            setCurntProduct(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    }, [productId]);

    const handlePrevNextClick = (type) => {
        if (type === 'prev' && productId > 1) {
            setProductId(productId - 1);
        } else if (type === 'next' && productId < 20) {
            setProductId(productId + 1);
        }
    }

    const handleRangeBarChange = (event) => {
        setProductId(event.target.value);
    }

    const handlePlayAndPauseClick = (type) => {
        if (type === 'play') {
            playSlideShowRef.current = setInterval(() =>{
                setProductId((prevId) => (prevId < 20 ? prevId + 1 : 1));
            }, 2000);
        }  else {
            clearInterval(playSlideShowRef.current);
        }
    }

    return (
        <>
            <b>{productId}</b>
            <div className='slideShowContainer'>
                <div className='row'>
                    <div className='col-2' onClick={() => {handlePrevNextClick('prev')}}><i class="bi bi-arrow-left"></i></div>
                    <div className='col-8 productTitle'>{curntProduct.title}</div>
                    <div className='col-2' onClick={() => {handlePrevNextClick('next')}}><i class="bi bi-arrow-right"></i></div>
                </div>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <img src={curntProduct.image} alt={curntProduct.title} height="300px" />
                    </div>
                </div>
                <div className='row'>
                     <div className='col-12 text-center'>
                        <h3>Price: {curntProduct.price} </h3>
                    </div> 
                </div>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <input value={productId} type="range" className='form-control' min="1" max="20" step="1" onChange={handleRangeBarChange}/>
                    </div>
                </div>
                <div className='row mt-3 mb-3'>
                    <div className='col-12 text-center'>
                        <button className='btn btn-primary' onClick={() => {handlePlayAndPauseClick('play')}}>
                            <i class="bi bi-play-circle-fill"></i>
                        </button>
                        <button className='btn btn-secondary' onClick={() => {handlePlayAndPauseClick('pause')}}>
                            <i class="bi bi-pause-circle-fill"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}