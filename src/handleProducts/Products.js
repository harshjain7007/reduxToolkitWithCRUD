
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import { Button } from 'react-bootstrap'


const Products = () => {
    const first = useSelector(state => state.first.count)
    const second = useSelector(state => state.second.val)
  
    const product = useSelector(state => state.third.products)
    const dispatch =  useDispatch()

    useEffect(()=> {

        axios.get("https://fakestoreapi.com/products").then(res => dispatch({type: "insertData", payload: [...res.data]})).catch(err => console.log(err))
    
      },[])
    
      console.log({first}, {second}, {product});
  
  
  return (
    <div>
        {/* <h1>{first}</h1>
      <button onClick={() => dispatch({type: "increment", payload: 10})}>INC...</button>
      <button onClick={() => dispatch({type: "decrement", payload: 10})}>DEC...</button>

      <h2>{second}</h2>
      <button onClick={() => dispatch({type: "multiply", payload: 10})}>MUL...</button>
      <button onClick={() => dispatch({type: "divide", payload: 2})}>DIV...</button> */}

      {/* <Button variant="primary">Click Me</Button> */}

      <div className='text-center'>
      <Link to="/products/crud"> go to perform crud with this products </Link>
      </div>

   <div style={{ padding: "50px" }}>

      {product?.map((curElem, index)=>{
          return <div key={index}>
            <h4>{curElem.title}</h4>
        </div>
      })}

      </div>



    </div>
  )
}

export default Products
