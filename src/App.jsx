import React from 'react'
import './App.css'
import Home from './pages/Home'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import Proudcts from './components/Proudcts'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Product from './components/Product'
import Layout from './pages/Layout'
import ProductItem from './components/ProductItem'

const App = () => {

  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Layout></Layout>}>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<AboutPage></AboutPage>}></Route>
        <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
        <Route path="/products" element={<Proudcts></Proudcts>}></Route>
        <Route path="/product" element={<Product></Product>}></Route>
        <Route path="/productItem" element={<ProductItem></ProductItem>}></Route>
      {/* <Route path="/product" element={<Product></Product>}></Route> */}
      </Route>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App;