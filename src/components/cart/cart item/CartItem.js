import React from "react";
import classes from "./CartItem.module.css";

const CartItem = ({ cartItem, onUpdateCartQuantity, onRemoveFromCart }) => {
  return (
    <div>
      <div className={classes["cart-item"]}>
        <img src={cartItem.image.url} alt={cartItem.name} />
        <div className={classes["cart-item__content"]}>
          <h1>{cartItem.name}</h1>
          <p>{cartItem.line_total.formatted_with_symbol}</p>
        </div>
        <div className={classes["cart-item__quantity"]}>
          <button
            onClick={() =>
              onUpdateCartQuantity(cartItem.id, cartItem.quantity - 1)
            }
          >
            -
          </button>
          <p>{cartItem.quantity}</p>
          <button
            onClick={() =>
              onUpdateCartQuantity(cartItem.id, cartItem.quantity + 1)
            }
          >
            +
          </button>
          <button
            className={classes["cart-item__remove"]}
            onClick={() => onRemoveFromCart(cartItem.id)}
          >
            Remove Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
