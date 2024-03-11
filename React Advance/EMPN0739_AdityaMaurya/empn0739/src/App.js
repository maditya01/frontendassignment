import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Stack, StackItem } from "@fluentui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./components/Cart";
import ItemSection from "./components/itemSection";
import { getProductsData } from "./API";


// EMPN0739 Aditya Maurya
// Created Higher Order Component (HOC) function which wraps StackItem
const HighComp = (StackComponent) => (props) => (
  <StackItem grow={props.grow} style={props.style}>
    <StackComponent {...props} />
  </StackItem>
);

const ItemStack = HighComp(ItemSection);
const CartHoc = HighComp(Cart); 

// EMPN0739 Aditya Maurya
const App = ({ products, addProductToCart, removeProductFromCart }) => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    // Fetch data using the API
    getProductsData().then((products) => {
      console.log(products);
      if (products) {
        // Update local state with fetched products
        setAllProducts(products);
      }
    });
  }, []);

  const onAdd = (id, name, desc, price, quantity) => {
    // Check if the product is not in the cart and quantity is valid
    if (!products.find((product) => product.id === id) && quantity) {
      const newProduct = { id, name, desc, price, quantity };
      // Dispatch action to add the product to the cart
      addProductToCart(newProduct);
    }
  };

  const onRemove = (id) => {
    // Dispatch action to remove the product from the cart
    removeProductFromCart(id);
  };

  return (
    <div className="App">
      <Header />
      <Stack horizontal horizontalAlign="space-between">
        <ItemStack grow="4" style={{ padding: "36px 0", backgroundColor: "#c2c2c2" }} products={allProducts} onAdd={onAdd} />
        <CartHoc grow="2" style={{ width: "30%" }} products={products} onRemove={onRemove} />
      </Stack>
      <Footer />
    </div>
  );
};


// EMPN0739 Aditya Maurya 
// mapState and mapDispatchToProps using shorthand notation
const mapState = ({ cart: { products } }) => ({ products });

const mapDispatchToProps = (dispatch) => ({
  addProductToCart: (product) => dispatch({ type: 'ADD', payload: product }),
  removeProductFromCart: (id) => dispatch({ type: 'REMOVE', payload: id }),
});

export default connect(mapState, mapDispatchToProps)(App);