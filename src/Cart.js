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
      handleIncreaseQuantity= (product) => {
        console.log('Increase quantity of product ', product)
        const {products}= this.state
        const index = products.indexOf(product)
        products[index].qty+= 1
        this.setState({
          // products : products
          products
        })
      }
      handleDecreaseQuantity=(product)=>{
        console.log('Decrease Quantity of product ', product)
        // if(product.qty === 0){
        //   return;
        // }
        const {products} = this.state
        const index = products.indexOf(product)
        if(products[index].qty === 0){
          return;
        }
        products[index].qty -= 1
        this.setState({
          products
        })
      }
      handleDeleteProduct=(id)=>{
        const {products} = this.state
        const items = products.filter((item)=> item.id !== id )
        this.setState({
          products : items 
        })
      }
    render(){
        // const arr = [1,2,3,4,5]
        const {products} = this.state;
        return(

            <div className='cart'>
            {/* <CartItem qty={1} price={1999} title={'Rolex'} img={''}/> */}
            {products.map((product)=>{
             return ( <CartItem product={product} key={product.id} onIncreaseQuantity ={this.handleIncreaseQuantity}  onDecreaseQuantity = {this.handleDecreaseQuantity} onDeleteProduct = { this.handleDeleteProduct} />)
            })}
            
            {/* {arr.map((items)=>{
                return items+5
            })} */}

            </div>
        )
    }
  }


export default Cart;