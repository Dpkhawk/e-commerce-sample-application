import { useLocation } from "react-router";

import React from "react";
const ProductDetailView = () => {
  const location = useLocation();
  console.log(location);
  const product = location.state.id;
  return (
    
      <div className="detailViewDiv">
        <img src={product.src} alt={product.name} className="detailViewImage" />
        <p>
          <b>{product.name}</b>
        </p>
        <p>
          <b>₹{product.price}</b>&nbsp;<strike>₹{product.discount}</strike>
        </p>
      </div>
    
  );
};
export default ProductDetailView;
