import React, { useEffect, useState }  from 'react';
import axios from 'axios'
import { Outlet } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Categories from "./components/Categories";
import { shopContext as ShopContext } from "./context/Shop";

const url = 'https://fakestoreapi.com/products'

function App() {
  const [products, setproducts] = useState(null)

  useEffect(() => {
    axios.get(url).then(res=> setproducts(res.data))
  }, [])
  return (
    <ShopContext.Provider value={{products}}>
    
      <div className="App">
        <Navbar/>
        <div className='body'>
        <div className='category'><Categories /></div>
        <div>
          <Outlet />
        </div>
        </div>
      </div>

      
    
    </ShopContext.Provider>
  );
}

export default App;
