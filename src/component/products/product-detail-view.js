

import { useLocation } from "react-router"


const ProductDetailView = () => {

   const location = useLocation()

   const product = location.state.id;
   return (<>
      <div className="detailViewDiv">
         <img src={product.src} alt={product.name} className="detailViewImage" />
         <p><b>{product.name}</b></p>
         <p><b>₹{product.price}</b>&nbsp;<strike>₹{product.discount}</strike></p>
      </div>
   </>)
}
export default ProductDetailView