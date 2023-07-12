import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {hotels} from "../../../back-end/backend";

const HotelSearch = () => {
    const {product} = useSelector(s => s)
    const dispatch = useDispatch()
    const [modal,setModal]=useState(false)
    useEffect(() => {
        dispatch({type: "GET_PRODUCT", payload: hotels})
    }, [])

    return (
        <div id="hotelSearch">
            <div className="container">
                <div className="hotelSearch">
                    <div className="hotelSearch--top">
                        <div className="hotelSearch--top__region">
                         <div className="hotelSearch--top__region--first" onClick={()=>{
                             setModal(!modal)}}
                         style={{
                             background:modal ? " #D9D9D9" : ""
                         }}>
                             <h6>Where to?</h6>
                             <p>City,area,landmark,property</p>
                         </div>
                            <div className="hotelSearch--top__region--second" style={{
                                display:modal ? "block" : "none",

                            }}>
                                <div className="hotelSearch--top__region--second__div">
                                    {
                                        product.map((el)=>{
                                            return (
                                                <div>
                                                    <h5>{el.region}</h5>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                            </div>
                        </div>

                        <div className="hotelSearch--top__district">
                            <h6>Cities and Districts</h6>
                        </div>
                        <div className="hotelSearch--top__btn">
                            <button>Search</button>
                        </div>
                    </div>
                    <div className="hotelSearch--bottom">
                        {
                            product.map((el)=>{
                                return (
                                    <div key={el.id}>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelSearch;