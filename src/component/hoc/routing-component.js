import DashBoard from "../home-page/dashboard"

const HigherOrderRouting=(Component)=>{
    const AuthorizeComponent=(props)=>{
        if(props.value){
            return props.children
        }
        else{
        return <DashBoard/>}
    }
    return AuthorizeComponent
}
export default HigherOrderRouting
