import React from "react";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Smart Phone",
      price: 19999,
      qty: 1,
      img: "",
    };
    // this.increaseQuantity = this.increaseQuantity.bind(this)
  }
  increaseQuantity=()=>{
      console.log('this.state',this.state);
      // this.state.qty = this.state.qty + 1;
      //setState form 1
      // this.setState({
      //   qty: this.state.qty + 1,
      // })

      //setState form 2 - if prevState required use this
      this.setState((prevState)=>{
        return {
          qty : prevState.qty + 1
        }
      })
  }
  decreaseQuantity=()=>{
    console.log('this.state ',this.state)
    this.setState((prevState)=>{
      if(prevState.qty >0 ){
      return {
        qty : prevState.qty - 1
      }}
    })
  }
  deleteQuantity(){
      console.log('delete')
  }
  render() {
    //object destructuring
    const { title, price, qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.images} />
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
              onClick ={ this.increaseQuantity}
            //   onClick ={ this.increaseQuantity.bind(this)}
            />
            <img
              alt="decrease "
              className="action-icons"
              src="https://image.flaticon.com/icons/png/512/992/992683.png"
              onClick={this.decreaseQuantity}
            />
            <img
              alt="delete "
              className="action-icons"
              src="https://image.flaticon.com/icons/png/512/1617/1617543.png"
              onClick={this.deleteQuantity}
            />
          </div>
        </div>
      </div>
    );
  }
}
const styles = {
  images: {
    width: 110,
    height: 110,
    borderRadius: 4,
    backgroundColor: "#ccc",
  },
};

export default CartItem;
