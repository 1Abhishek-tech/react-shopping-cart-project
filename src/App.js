import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from 'firebase';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        // {
        //   title: "iPhone12 Pro Max(256GB)",
        //   price: 999,
        //   qty: 1,
        //   img: "https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_UY327_FMwebp_QL65_.jpg",
        //   id: 1,
        // },
        // {
        //   title: "Apple WatchSE (GPS,44mm)",
        //   price: 99,
        //   qty: 1,
        //   img: "https://m.media-amazon.com/images/I/71rhrO49SmL._AC_UY327_FMwebp_QL65_.jpg",
        //   id: 2,
        // },
        // {
        //   title: "2020 Apple MacBook Pro",
        //   price: 5000,
        //   qty: 1,
        //   img: "https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY327_FMwebp_QL65_.jpg",
        //   id: 3,
        // },
      ],
      loading : true,
    };
    this.db = firebase.firestore();
    // this.increaseQuantity = this.increaseQuantity.bind(this)
    // this.testing()
  }
  componentDidMount(){
    // firebase
    // .firestore()
    // .collection('products')
    // .get()
    // .then((snapshot)=>{
    //   console.log('snapshot')
    //   snapshot.docs.map((doc)=>{
    //     console.log(doc.data())
    //   })
    //   const products = snapshot.docs.map((doc)=>{
    //     const data = doc.data();
    //     data['id'] = doc.id;
        
    //     return data;
    //     // return doc.data;
    //   })
      
    //   this.setState({
    //     products : products,
    //     loading: false
    //   })
    // })
    this.db
    .collection('products')
    // .where('price','>',1000)
    // .orderBy('price')
    .onSnapshot((snapshot)=>{
      console.log('snapshot')
      snapshot.docs.map((doc)=>{
        console.log(doc.data())
      })
      const products = snapshot.docs.map((doc)=>{
        const data = doc.data();
        data['id'] = doc.id;
        
        return data;
        // return doc.data;
      })
      
      this.setState({
        products : products,
        loading: false
      })
    })

  }
  handleIncreaseQuantity = (product) => {
    console.log("Increase quantity of product ", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    // products[index].qty += 1;
    // this.setState({
    //   // products : products
    //   products,
    // });
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef
    .update({
      qty : products[index].qty +1 
    })
    .then(()=>{
      console.log('Product updated ',products[index].title , 'increased by 1')
    })
    .catch((error)=>{
      console.log('Error is ', error)
    })
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
    const docRef = this.db.collection('products').doc(products[index].id)
    docRef
    .update({
      qty : products[index].qty - 1
    })
    .then(()=>{
      console.log('Product Updated ',products[index].title , 'decreased by 1')
    })
    .catch((error)=>{
      console.log('Error is ',error)
    })
    // products[index].qty -= 1;
    // this.setState({
    //   products,
    // });
  };
  handleDeleteProduct = (title ,id) => {
    const { products } = this.state;
    // const items = products.filter((item) => item.id !== id);
    const docRef = this.db.collection('products').doc(id)
    docRef
    // .update({
    //   price : firebase.firestore.FieldValue.delete()
    // })
    .delete()
    .then(()=>{
      console.log(title , 'removed from Cart')
    })
    // this.setState({
    //   products: items,
    // });
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
      if(product.qty>0){
      cartTotal += product.qty*product.price 
    }
    return '';
    })
    return cartTotal;
  }
  addProduct=()=>{
    this.db
    .collection('products')
    .add({
      img: 'https://images-na.ssl-images-amazon.com/images/I/71KHkTS6aOL._UX625_.jpg',
      title : 'Brand New Puma Shoes',
      price : 500,
      qty : 1,
    })
    .then((docRef)=>{
      console.log('Added Product is ', docRef)
    })
    .catch((error)=>{
      console.log('Error ',error)
    })
  }
  L2Hfilter=()=>{
    this.db
      .collection('products')
      // .where('price','>',0)
      .orderBy('price','asc')
      .onSnapshot((snapshot)=>{
        const products = snapshot.docs.map((doc)=>{
          const data = doc.data();
          data['id'] = doc.id;
          return data;
        })
        this.setState({
          products : products,
          loading: false
        })
      })
    }
    H2Lfilter=()=>{
      this.db
      .collection('products')
      // .where('price','>',0)
      .orderBy('price','desc')
      .onSnapshot((snapshot)=>{
        const products = snapshot.docs.map((doc)=>{
          const data = doc.data();
          data['id'] = doc.id;
          return data;
        })
        this.setState({
          products : products,
          loading: false
        })
      })
    }  
  
  render() {
    const {products, loading} = this.state
    return (
      <div className="App">
        <Navbar 
          count = {this.getCartCount()}
        />
        <button onClick={this.addProduct} style={{padding:20, fontWeight: "bold", color: "lightgrey", backgroundColor: "black", borderRadius: 30, }}>Add a Product</button>
        <button onClick={this.L2Hfilter} style={{padding:20, fontWeight: "bold", color: "lightgrey", backgroundColor: "black", borderRadius: 30, }}>low to high</button>
        <button onClick={this.H2Lfilter} style={{padding:20, fontWeight: "bold", color: "lightgrey", backgroundColor: "black", borderRadius: 30, }}> high to low</button>


        <Cart
          products = {products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products ..</h1>}
        <div style={{fontWeight: "bold", paddingLeft: 25}}>Total : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
