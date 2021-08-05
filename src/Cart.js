import React from "react";
import CartItem from "./CartItem";

const Cart =(props)=>{
  
    
        // const arr = [1,2,3,4,5]
        const {products} = props;
        return(

            <div className='cart'>
            {/* <CartItem qty={1} price={1999} title={'Rolex'} img={''}/> */}
            {products.map((product)=>{
             return ( <CartItem product={product} key={product.id} onIncreaseQuantity ={props.onIncreaseQuantity}  onDecreaseQuantity = {props.onDecreaseQuantity } onDeleteProduct = { props.onDeleteProduct} />)
            })}
            
            {/* {arr.map((items)=>{
                return items+5
            })} */}

            </div>
        )
    
  }


export default Cart;