
// import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import axios from 'axios'
// import { Button } from 'react-bootstrap'

// const App = () => {
//   const first = useSelector(state => state.first.count)
//   const second = useSelector(state => state.second.val)

//   const third = useSelector(state => state.third.products)
//   const dispatch =  useDispatch()


//   useEffect(()=> {

//     axios.get("https://fakestoreapi.com/products").then(res => dispatch({type: "insertData", payload: res.data})).catch(err => console.log(err))

//   },[])

//   console.log({first}, {second}, {third});

//   return (
//     <div>
//       <h1>{first}</h1>
//       <button onClick={() => dispatch({type: "increment", payload: 10})}>INC...</button>
//       <button onClick={() => dispatch({type: "decrement", payload: 10})}>DEC...</button>

//       <h2>{second}</h2>
//       <button onClick={() => dispatch({type: "multiply", payload: 10})}>MUL...</button>
//       <button onClick={() => dispatch({type: "divide", payload: 2})}>DIV...</button>

//       {/* <Button variant="primary">Click Me</Button> */}



//     </div>
//   )
// }

// export default App


import React from 'react'
import Products from './handleProducts/Products'
import ProductHome from './handleProducts/ProductHome'
import ProductCrud from './handleProducts/ProductCrud'

import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ProductHome />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/crud" element={<ProductCrud />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
