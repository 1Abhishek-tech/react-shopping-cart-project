import React from "react";

const CartItem = (props) => {
  // constructor() {
  //   super();
  //   this.state = {
  //     title: "Smart Phone",
  //     price: 19999,
  //     qty: 1,
  //     img: "",
  //   };
  //   // this.increaseQuantity = this.increaseQuantity.bind(this)
  //   // this.testing()
  // }
  // testing(){
  //   const promise = new Promise((resolve,reject)=>{
  //     setTimeout(()=>{
  //       resolve('done')
  //     },5000)
  //   })
  //   promise.then(()=>{
  //     //setState acts like synchronus call
  //     this.setState({qty : this.state.qty +10})
  //     this.setState({qty : this.state.qty +10})
  //     this.setState({qty : this.state.qty +10})
  //     console.log('this.state ', this.state)
  //   })
  // }
  // increaseQuantity=()=>{
  //   console.log('this.state callback',this.state)
  //   // this.state.qty = this.state.qty + 1;
  //   //setState form 1
  //   // this.setState({
  //     //   qty: this.state.qty + 1,
  //     // },()=>{
  //     //   console.log('this.state callback',this.state)
  //     // })

  //     //setState form 2 - if prevState required use this
  //     this.setState((prevState)=>{
  //       return {
  //         qty : prevState.qty + 1
  //       }
  //     })

  // }
  // decreaseQuantity=()=>{
  //   const {qty} = this.state
  //   if(qty === 0){
  //     return ;
  //   }
  //   this.setState((prevState)=>{
  //     // if(prevState.qty >0 ){
  //     return {
  //       qty : prevState.qty - 1
  //     }
  //   // }
  //   })
  // }

  // render() {
  //object destructuring
  // const { title, price, qty } = this.state;
  const { img, qty, title, price, id } = props.product;
  const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } =
    props;
  // console.log('rendering')
  // console.log('this.props ,', this.props)
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.images} src={img} />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "#777" }}>Rs {price} </div>
        <div style={{ color: "#777" }}>Qty : {qty}</div>
        <div className="cart-item-actions">
          {/* {Button} */}
          <img
            alt="increase "
            className="action-icons"
            src="https://image.flaticon.com/icons/png/512/992/992651.png"
            onClick={() => onIncreaseQuantity(product)}
            // onClick = {()=> this.props.onIncreaseQuantity(this.props.product)}
            // onClick ={ this.increaseQuantity}
            //   onClick ={ this.increaseQuantity.bind(this)}
          />
          <img
            alt="decrease "
            className="action-icons"
            src="https://image.flaticon.com/icons/png/512/992/992683.png"
            onClick={() => onDecreaseQuantity(product)}
            // onClick={this.decreaseQuantity}
          />
          <img
            alt="delete "
            className="action-icons"
            src="https://image.flaticon.com/icons/png/512/1617/1617543.png"
            onClick={() => {
              onDeleteProduct(title, id);
            }}
          />
        </div>
      </div>
    </div>
  );
  // }
};
const styles = {
  images: {
    width: 110,
    height: 110,
    borderRadius: 4,
    backgroundColor: "#ccc",
  },
};

export default CartItem;
