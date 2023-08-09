import React from 'react'
import { Link } from 'react-router-dom'

const ProductHome = () => {

    return (
        <>
            <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', height: "100vh" }}>
                <div style={{ border: "5px solid gray", padding: "20px" }}>
                    <Link to="/products">All Products</Link>
                    <br /><br />
                    <Link to="/products/crud">Do CRUD with Products</Link>
                </div>



            </div>
        </>
    )
}

export default ProductHome
