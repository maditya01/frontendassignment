import React from "react";
import emptycart from "../images/common/empty-cart.svg";
import { Label, Stack, Text } from "@fluentui/react";
import CartCard from "./cartSection/cartCard";


// EMPN0739 Aditya Maurya
const Cart = ({ products, onRemove }) => {
  const getEmptyCart = () => (
    <Stack>
      <img src={emptycart} alt="Cart" />
      <Label>Your Cart is Empty</Label>
      <Text block>Please add something to your cart</Text>
    </Stack>
  );

  const getSelectedProducts = () => (
    <>
      {products.map((product) => (
        <CartCard
          key={product.id}
          id={product.id}
          name={product.name}
          desc={product.desc}
          price={product.price}
          quantity={product.quantity}
          onRemove={onRemove}
        />
      ))}
    </>
  );

  const totalAmount = products.reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0
  );

  return products.length === 0 ? (
    getEmptyCart()
  ) : (
    <>
      {getSelectedProducts()}
      <div
        style={{
          borderTop: "1px solid grey",
          margin: 8,
        }}
      >
        <span style={{ float: "left" }}>
          <b>Total</b>
        </span>
        <span style={{ float: "right" }}>{totalAmount.toPrecision(5)}</span>
      </div>
    </>
  );
};

export default Cart;
