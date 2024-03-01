import React, { useState } from 'react';


const List = ({ products, addToCartHandler }) => {
  
  return (
    <div className="flex">
      {products.map((productItem, index) => {
        return (
          <div key={index} style={{ width: "33%" }}>
            <div className="product-item">
              <img src={productItem.url} width="100%" />
              <p>
                {productItem.name} | {productItem.category}{" "}
              </p>
              <p>Catagory:  {productItem.category} </p>
              <p> Rs. {productItem.price} /-</p>
              <button
                onClick={() => {
                  addToCartHandler(productItem);
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List
