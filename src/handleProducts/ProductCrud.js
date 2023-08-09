import React, {useState, useEffect} from 'react'

import { useSelector,  useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'

const ProductCrud = () => {
    const product = useSelector(state => state.third.products)
    const [ title, setTitle ] = useState([])
    const [newTitle, setNewTitle] = useState("")
    
    const dispatch =  useDispatch()

    useEffect(()=> {
        setTitle(product.map((curElem, index) => {
            return { ...product[index], inpEle: true}
        }))
    }, [])

    console.log({newTitle});

    // const onsub = (e) => {
    //     e.preventDefault()
    // }
    const onblu = (indx) => {
        // console.log("onblu==>", inex);
        setTitle(title.map((curElem, index) => {
            console.log("index === indx", index === indx, index, indx);
            return index === indx ? {...curElem, inpEle: true} : curElem
        }))
    }

    const onEdit = (indx) => {
        // console.log("onblu==>", indx);
        setTitle(title.map((curElem, index) => {
            console.log("index === indx", index === indx, index, indx);
            return index === indx ? {...curElem, inpEle: false} : curElem
        }))
    }

    const onChng = (event, indx) => {
        let newValue = event.target.value 
        setTitle(( prevState => {
            let updatedTitle = prevState.map((curElem, i) => {
                if (i === indx) {
                    return { ...curElem, title: newValue };
                }
                return curElem;
            })
            return updatedTitle
        } ))
    }

    const handleClk = () => {
        dispatch({ type: "create", payload: newTitle }) 
        setNewTitle("")
    }

   


    return (
        <>
            <div style={{ padding: "50px", marginBottom: "100px" }}>

              {/* <form action="" onSubmit={onsub}> */}
                {product?.map((curElem, index) => {
                    return <div key={index} style={{ marginBottom: "50px" }}>
                        <br />
                        <h4 style={{ margin: 0 }}> ({index + 1}) &nbsp; {curElem.title}</h4>
                        <br />
                        <Button className='mx-2' variant='danger' onClick={() => dispatch({type: "delete", payload: index})} >Delete</Button>
                        <Button variant='success' onClick={() => dispatch({type: "edit", payload: index})} >Edit</Button> 
                        <input className='mx-2 my-2' type="text" value={curElem.title} onBlur={() => dispatch({type: "blur", payload: index})} style={{ width:  "100%", padding: "5px" }} disabled={curElem.inpEle}  
                        // onChange={event => onChng(event, index)}
                        onChange={event => dispatch({type: "chng", payload: { index, updatedTitle: event.target.value}})}
                        />
                    </div>
                })}


                <div style={{ marginTop: "50px" }}>
                   <input type="text" value={newTitle}  style={{ padding: "5px", marginRight: "10px", width: "70%" }} onChange={e => setNewTitle(e.target.value)}/><Button variant='success' onClick={handleClk}  disabled={newTitle.length === 0 ? true : false}>ADD</Button>
                </div>

                {/* </form> */}

            </div>
                
        </>
    )
}

export default ProductCrud
