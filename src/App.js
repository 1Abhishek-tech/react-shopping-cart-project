import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: "iPhone12 Pro Max(256GB)",
          price: 999,
          qty: 1,
          img: "https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_UY327_FMwebp_QL65_.jpg",
          id: 1,
        },
        {
          title: "Apple WatchSE (GPS,44mm)",
          price: 99,
          qty: 1,
          img: "https://m.media-amazon.com/images/I/71rhrO49SmL._AC_UY327_FMwebp_QL65_.jpg",
          id: 2,
        },
        {
          title: "2020 Apple MacBook Pro",
          price: 5000,
          qty: 1,
          img: "https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY327_FMwebp_QL65_.jpg",
          id: 3,
        },
      ],
    };
    // this.increaseQuantity = this.increaseQuantity.bind(this)
    // this.testing()
  }
  handleIncreaseQuantity = (product) => {
    console.log("Increase quantity of product ", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      // products : products
      products,
    });
  };
  handleDecreaseQuantity = (product) => {
    console.log("Decrease Quantity of product ", product);
    // if(product.qty === 0){
    //   return;
    // }
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;
    this.setState({
      products,
    });
  };
  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items,
    });
  };
  getCartCount=()=>{
    let count=0
    const {products}= this.state
    products.forEach((product)=>{
      count+= product.qty
    })
    return count
  }
  getCartTotal=()=>{
    let cartTotal =0;
    const {products} = this.state;
    products.forEach((product)=>{
      cartTotal += product.qty*product.price 
    })
    return cartTotal;
  }
  render() {
    const {products} = this.state
    return (
      <div className="App">
        <Navbar 
          count = {this.getCartCount()}
        />
        <Cart
          products = {products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{fontWeight: "bold", paddingLeft: 25}}>Total : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
