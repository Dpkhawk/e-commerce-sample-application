const Header=()=>{
    const getInfo=(id)=>{
        fetch(`http://localhost:2000/users/${id}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    const deleteUsers=(id)=>{
        fetch(`http://localhost:2000/users/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json() )
        .then(data=>console.log(data))
    }
  
    return(
    <>
   < button onClick={()=>getInfo('6620db6f718c865efec934e0')}>Get users</button>
    <button onClick={()=>deleteUsers('661fa8e6e30e8dae6fc934df')}>Delete User</button>
    </>)

}
export default Header