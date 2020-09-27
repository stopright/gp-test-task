import React from 'react'
import {Product} from "./Product";

export const ProfileBody = ({productArray}) => {

    return (
        <div className={"container-fluid height-80 pt-5"}>

            <div className={"d-flex justify-content-around"}>
                {productArray.map((product, productIndex) => (
                    <Product productName={product} key={productIndex}/>
                ))}
            </div>

        </div>
    )
}
