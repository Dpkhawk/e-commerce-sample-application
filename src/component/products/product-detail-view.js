// import {useHistory} from 'react-router'

import { useParams } from "react-router"


 const ProductDetailView=(props)=>{
  //  const history=useHistory() 
  //   console.log(history)
  const params=useParams()
  console.log(params);
   return(<>
   <img src="..." alt='name'/>
   <p>value</p>
   </>)
}
export default ProductDetailView