import React from 'react'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import {delCart} from '../redux/action/index'
const Cart=()=> {
    const state = useSelector((state) => state.handleCart)
    const dispatch=useDispatch()
    const handleClose = (item)=>{
        dispatch(delCart(item))
    }

    const cartItems=(cartItem)=>{
        return (
            <div className='px-4 my-5 bg-light rounded-3'>
                <div className='container'>
                <button onClick={()=>handleClose(cartItem)} className='btn-close float-end' aria-label="Close"></button>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px"></img>
                    </div>
                    <div className='col-md-4'>
                        <h3>{cartItem.title}</h3>
                        <p className='lead fw-bold'>
                            {cartItem.qty} X S/. {cartItem.price}= S/. 
                            {cartItem.qty*cartItem.price}
                        </p>
                        <button className='btn btn-outline-dark me-4'>
                            <i className='fa fa-minus'></i>
                        </button>
                    </div>
                    
                        
                </div>
                </div>
            </div>
        )
        
    }
    return (
        <>
            {state.length !==0 && state.map(cartItems)}
        </>
    )
    
   
}
export default Cart;