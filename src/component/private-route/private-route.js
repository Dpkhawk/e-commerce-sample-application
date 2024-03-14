import LoginForm from "../login2/login-form"

const PrivateRoute=({children})=>{
    const loginValue=sessionStorage.getItem("userId");
    return loginValue?children:<LoginForm/>
}
export default PrivateRoute