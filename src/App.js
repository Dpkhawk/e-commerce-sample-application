import { useState } from 'react';
import Body from './HomePage/Body';
import './HomePage/NavigationBar.css';
import LoginPage from './Login/UserLogin';
import SignUp from './SignUp/SignUpPage';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { createContext } from 'react';
import Products from './Products/ProductsPage';
export const LevelContext=createContext()
function App() {
  const[searchItems,setSearchItems]=useState('')
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LevelContext.Provider value={{searchItemsValue:{searchItems},setSearchItemsFunction:{setSearchItems}}}><Body /></LevelContext.Provider>}></Route>
        <Route path='/loginPage' element={<LoginPage/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/products' element={<LevelContext.Provider value={{searchItemsValue:{searchItems},setSearchItemsFunction:{setSearchItems}}}><Products /></LevelContext.Provider>}></Route>
      </Routes>
   </BrowserRouter>
   
   {/* <Products/> */}
   {/*  */}
   </>
  );
}

export default App;
