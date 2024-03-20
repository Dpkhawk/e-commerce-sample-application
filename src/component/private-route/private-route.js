import DashBoard from "../home-page/dashboard"

const PrivateRoute=({value,children})=>{
    let values
    if(value==="beforeLogin"){
     values=!sessionStorage.getItem("userId");}
     else{
        values=sessionStorage.getItem("userId");}
     
    if(values){
        return children
    }
    else{
    return <DashBoard/>}

}
export default PrivateRoute