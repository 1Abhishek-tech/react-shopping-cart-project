import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
        products : [
            {
                title: "Smart Phone",
                price: 999,
                qty: 1,
                img: "",
                id:1
              },
              {
                title: "Watch",
                price: 99,
                qty: 1,
                img: "",
                id:2
              },
              {
                title: "Laptop",
                price: 5000,
                qty: 1,
                img: "",
                id:3
              }
        ]
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this)
        // this.testing()
      }
    render(){
        // const arr = [1,2,3,4,5]
        const {products} = this.state;
        return(

            <div className='cart'>
            {/* <CartItem qty={1} price={1999} title={'Rolex'} img={''}/> */}
            {products.map((product)=>{
             return ( <CartItem product={product} key={product.id} />)
            })}
            
            {/* {arr.map((items)=>{
                return items+5
            })} */}

            </div>
        )
    }
  }


export default Cart;