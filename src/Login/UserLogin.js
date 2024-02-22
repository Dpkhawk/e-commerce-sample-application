import './UserLogin.css'
export default function LoginPage(){
    return(<>
    
    <form className="forms">
        <div className='image'><img src='https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg'/></div>
        <h1>Login Form</h1>
        <div className="row1"><label for='name'>
            Username
         </label>
        <input type="text" id="name" placeholder='Enter the username'/></div>
        <div className="row2"><label for='password'>
          Password
        </label>
        <input type="password" id="password" placeholder='Enter the password'/></div>
        <div className='row3'><input type="checkbox"/> <label for='checkbox'>Remember Me</label><a href='#'>Forgot Password?</a></div>
        <div className='buttons' ><button className="button">LogIn</button></div>
    </form>
    </>)
}