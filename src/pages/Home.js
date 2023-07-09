import React from 'react'
import Navbar from '../features/Navbar/Navbar'
import ProductList from '../features/ProductList/ProductList'

const Home = () => {
  return (
    <>
    <Navbar>
        <ProductList/>
    </Navbar>
    </>
  )
}

export default Home