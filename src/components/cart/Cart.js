import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./cart item/CartItem";
import classes from "./Cart.module.css";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

const Cart = ({
  cart,
  isLoading,
  onEmptyCart,
  onUpdateCartQuantity,
  onRemoveFromCart,
}) => {
  return (
    <div className={classes.cart}>
      <div className={classes["cart__text"]}>
        {cart.line_items.length > 0 ? (
          <p>Your Shopping Cart</p>
        ) : (
          <p
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            Your cart is empty! <Link to="/">Please add some...</Link>
          </p>
        )}
      </div>
      <div className={classes["cart__container"]}>
        {cart.line_items.map((item) => {
          return (
            <CartItem
              cartItem={item}
              isLoading={isLoading}
              onUpdateCartQuantity={onUpdateCartQuantity}
              onRemoveFromCart={onRemoveFromCart}
              key={item.id}
            />
          );
        })}
      </div>
      {cart.line_items.length > 0 && (
        <div>
          <p className={classes["cart__total-price"]}>
            Total Price: {cart.subtotal.formatted_with_symbol}
          </p>
          <div className={classes["cart__actions"]}>
            <button
              className={classes["cart__clear-all"]}
              onClick={onEmptyCart}
            >
              <FaTrash /> Clear The List
            </button>
            <button className={classes["cart__checkout"]}>
              <Link to="/checkout">
                <BsFillBagCheckFill />
                Checkout
              </Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
