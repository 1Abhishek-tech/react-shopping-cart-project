import React from "react";

const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <div style={styles.header__welcome}> Welcome to my Store</div>
      <div style={styles.cartIconContainer}>
        <img
          style={styles.cartIcon}
          src="https://image.flaticon.com/icons/png/512/726/726496.png "
          alt="cart-icon "
        />
        <span style={styles.cartCount}> {props.count}</span>
      </div>
    </div>
  );
};
const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20,
  },
  nav: {
    height: 70,
    position: "sticky",
    background: "#9bb5e9",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header__welcome: {
    marginLeft: "10vw",
    fontWeight: "800",
    fontSize: "1.4rem",
    color: "grey",
  },
  cartIconContainer: {
    position: "relative",
  },
  cartCount: {
    background: "yellow",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 0,
    top: -9,
  },
};

export default Navbar;
