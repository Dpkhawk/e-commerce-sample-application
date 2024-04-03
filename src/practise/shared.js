const usernameValidate=(name)=>{
    if(name.match("^[a-zA-Z]+$")){
        return true
    }
    else{
        return false
    }
}
const passwordValidate=(password)=>{
    if(password.match("(?=.*[A-Z])(?=.*).{8,}")){
        return true
    }
    else{
        alert("password wrong")
    }
}
const mobileValidate=(mobile)=>{
    if(mobile.match("[0-9]{10}")){
        return true
    }
    else{
        alert("mobile number  wrong")
    }
}
const zipValidate=(zip)=>{
    if(zip.match("[0-9]{10}")){
        return true
    }
    else{
        alert("zipcode  wrong")
    }
}
 export {usernameValidate,passwordValidate,mobileValidate,zipValidate}
