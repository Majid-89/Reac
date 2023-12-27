import React from 'react';
import 'flowbite';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import { BiUpArrowCircle } from "react-icons/bi";
import Signup from './Components/Screens/Signup';
import Login from './Components/Screens/Login';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import ProductDetails from './Components/productDetails';
import { Layout } from './Components/Layout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Hero />} />
          <Route path="/productDetails" element={<ProductDetails />} />
        </Route >
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App
