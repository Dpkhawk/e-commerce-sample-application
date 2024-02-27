import { useEffect, useState } from 'react'
import './NavigationBar.css'
import NavigationBar from './Navigation'

export default function Body({searchItems,setSearchItems}){
    // const[data,setData]=useState([])
    //   useEffect(()=>{
    //    fetch('http://localhost:3000/Vegetables')
    //    .then(response=>setData(response.json()))
    //   // .then((data)=>setData(data))
         
    // },[])
    // useEffect(()=>{
    //     async function showProducts(){
    //         const datas=await fetch(`http://localhost:3000/Vegetables`)
    //         const Productdata=await datas.json()
    //         setData([...data,...Productdata])
    //         console.log(Productdata[0].name);
    //         }
    //         showProducts()
    // },[])
    return(<>
    <NavigationBar/>
    <div className='items'>
    <div className='products'>
        <div><img className="products-img" src='https://www.jiomart.com/images/product/original/590000186/carrot-orange-500-g-product-images-o590000186-p590000186-0-202207291751.jpg?im=Resize=(1000,1000)'/></div><br/>
        <p><b>Carrot</b></p>
        <select className='products-select'>
            <option value='500 '>500 g</option>
            <option value='1 '>1 Kg</option>
            <option value='5'>5 Kg</option>
        </select>
        <p className='products-price'><b>₹50</b> &nbsp;<strike>₹75</strike></p>
        <button className='products-button'>Add to cart</button>
    </div>
    <div className='products'>
        <div><img className="products-img" src='https://www.veggycation.com.au/siteassets/veggycationvegetable/capsicum-red.jpg'/></div><br/>
        <p><b>Capsicum</b></p>
        <select className='products-select'>
            <option value='500 '>500 g</option>
            <option value='1 '>1 Kg</option>
            <option value='5'>5 Kg</option>
        </select>
        <p className='products-price'><b>₹70</b> &nbsp;<strike>₹105</strike></p>
        <button className='products-button'>Add to cart</button>
    </div>
    <div className='products'>
        <div><img className="products-img" src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSlSmMQmoGhFnckZYMqmw7jMfr6xdBRVHpsd-PrU0D1UFa3_NB0'/></div><br/>
        <p><b>Cabbage</b></p>
        <select className='products-select'>
            <option value='500 '>500 g</option>
            <option value='1 '>1 Kg</option>
            <option value='5'>5 Kg</option>
        </select>
        <p className='products-price'><b>₹90</b> &nbsp;<strike>₹100</strike></p>
        <button className='products-button'>Add to cart</button>
    </div>
    <div className='products'>
        <div><img className="products-img" src='https://thekitchencommunity.org/wp-content/uploads/2022/10/mutton-meat.jpeg'/></div><br/>
        <p><b>Mutton</b></p>
        <select className='products-select'>
            <option value='500 '>500 g</option>
            <option value='1 '>1 Kg</option>
            <option value='5'>2 Kg</option>
        </select>
        <p className='products-price'><b>₹900</b> &nbsp;<strike>₹1000</strike></p>
        <button className='products-button'>Add to cart</button>
    </div>
    <div className='products'>
        <div><img className="products-img" src='https://img.freepik.com/free-photo/three-fresh-organic-raw-eggs-isolated-white-surface_114579-43677.jpg'/></div><br/>
        <p><b>Egg</b></p>
        <select className='products-select'>
            <option value='500 '>10</option>
            <option value='1 '>15</option>
            <option value='5'>20</option>
        </select>
        <p className='products-price'><b>₹5</b> &nbsp;<strike>₹8</strike></p>
        <button className='products-button'>Add to cart</button>
    </div>
    </div>
    </>)
}
