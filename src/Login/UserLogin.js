import { useEffect, useState } from 'react'
import './UserLogin.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function LoginPage(){
    const[userName,setUserName]=useState('')
    const[password,setPassword]=useState('')
    // const navigation=useNavigate()
    function handleSubmit(e){
        e.preventDefault()
        async function showCredentials(){
        const data=await fetch(`http://localhost:3000/registers/${userName}`)
        const value=await data.json()
        if((value.id===userName)&&(value.password===password)){
            alert('login successful');
            // navigation('/home')
        }
        else{
            alert('invalid credentials');
        }
        }
        showCredentials()
        
}
    return(<>
   
    <form className="forms">
        <div className='image'><img src='https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg'/></div>
        <h1 className='login'>Login Form</h1>
        <div className="row1"><label for='name'>
            Username
         </label>
        <input onChange={(e)=>setUserName(e.target.value)} type="text" id="name" placeholder='Enter the username'/></div>
        <div className="row2"><label for='password'>
          Password
        </label>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} id="password" placeholder='Enter the password'/></div>
        <div className='row3'><input type="checkbox"/> <label for='checkbox'>Remember Me</label><a href='#'>Forgot Password?</a></div>
        <div className='buttons' ><button className="button" onClick={(e)=>handleSubmit(e)} >LogIn</button></div>
    </form>
   
    </>)
}