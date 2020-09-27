import React from 'react'

export const Product = ({productName}) => {

    return (
        <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{productName}</h5>
                    <p className="card-text">Краткое описание продукта.</p>
                    <button className="btn btn-primary product-button">Перейти >></button>
                </div>
        </div>
    )
}
