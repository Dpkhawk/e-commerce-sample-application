import { useState } from 'react';
import Body from './HomePage/Body';
import './HomePage/NavigationBar.css';
import LoginPage from './Login/UserLogin';
import SignUp from './SignUp/SignUpPage';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { createContext } from 'react';
import Products from './Products/ProductsPage';
import ForgotPassword from './ForgotPassword/ForgotPassword';
export const LevelContext=createContext()
function App() {
  const[searchItems,setSearchItems]=useState('')
  const[login,setLogin]=useState(true)
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LevelContext.Provider value={{searchItemsValue:{searchItems},setSearchItemsFunction:{setSearchItems},login:{login},setLogin:{setLogin}}}><Body /></LevelContext.Provider>}></Route>
        <Route path='/loginPage' element={<LoginPage login={login} setLogin={setLogin}/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/products' element={<LevelContext.Provider value={{searchItemsValue:{searchItems},setSearchItemsFunction:{setSearchItems},login:{login},setLogin:{setLogin}}}><Products /></LevelContext.Provider>}></Route>
        <Route path='/forgotpassword' element={<ForgotPassword/>}></Route>
      </Routes>
   </BrowserRouter>
   
   {/* <Products/> */}
   {/*  */}
   </>
  );
}

export default App;
