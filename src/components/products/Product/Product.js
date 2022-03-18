import React from "react";
import classes from "./Product.module.css";
import { MdAddShoppingCart } from "react-icons/md";

const Product = ({ product, onAddToCart }) => {
  const { name, price, image } = product;
  return (
    <div className={classes.product}>
      <img src={image.url} alt={name} />

      <div className={classes["product__content"]}>
        <h1>{name}</h1>
        <p>{price.formatted_with_symbol}</p>
      </div>
      <div
        className={classes["product__shopping-cart"]}
        title="Add to cart"
        onClick={() => onAddToCart(product.id, 1)}
      >
        <MdAddShoppingCart />
      </div>
    </div>
  );
};

export default Product;
