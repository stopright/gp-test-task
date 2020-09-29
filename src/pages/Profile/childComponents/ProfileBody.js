import React from 'react'
import {Product} from "./Product";

export const ProfileBody = ({productArray}) => {

    return (
        <div className={"container-fluid height-80 pt-4 pr-4 pl-4"}>

            <div className={"products-list"}>
                {productArray.map((product, productIndex) => (
                    <Product productName={product} key={productIndex}/>
                ))}
            </div>

        </div>
    )
}
