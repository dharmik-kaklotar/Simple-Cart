import React, { useState,useEffect } from "react";

const Cart = ({ items }) => {
  const [total, setTotal] = useState(0);

  // Calculate total outside the render function.
  const calculateTotal = () => {
    if (items && items.length > 0) {
      const newTotal = items.reduce((acc, item) => acc + item.price, 0);
      setTotal(newTotal);
    } else {
      setTotal(0);
    }
  };

  useEffect(() => {
    calculateTotal();
  }, [items]); // Recalculate total whenever items change.

  return (
    <>
    <div className="total">
      
       
            <h4>Total Price(inc.Tex):</h4>
            <p>Rs.{total}</p>
     
      </div>
    </>
  );
};

export default Cart;
