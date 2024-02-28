import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { LevelContext } from '../App'
export default function NavigationBar(){
    //const[loginName,setLoginName]=useState('')
    const newValue=useContext(LevelContext)
    // if(newValue.login.login){
    //     setLoginName('Login')
    // }
    // else{
    //     setLoginName('Logout')
    // }
   return( <nav>
    <div className='FloatLeft'>
            <Link to={'/'} className='homeLinks'>Home</Link>
            <Link className='homeLinks'>About</Link>
            <Link className='homeLinks' to={'/products'}>Products</Link>
            <Link className='homeLinks'>Contact</Link>
            </div>
            <input className='searchBar'placeholder='search items' type='search' value={newValue.searchItemsValue.searchItems} onChange={(e)=>newValue.setSearchItemsFunction.setSearchItems(e.target.value)}/>
            <div className='LogIn'><Link to={'/signup'} className='homeLinks'>SignUp</Link><Link to={'/loginPage'} className='homeLinks'>{newValue.login?'Login':'Logout'}</Link></div>         
    </nav>)
}