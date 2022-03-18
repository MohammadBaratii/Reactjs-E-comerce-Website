import React from "react";
import Product from "./Product/Product";
import classes from "./Products.module.css";

const Products = ({ products, onAddToCart }) => {
  return (
    <div className={classes.products}>
      {products.map((product) => {
        return (
          <Product
            product={product}
            onAddToCart={onAddToCart}
            key={product.id}
          />
        );
      })}
    </div>
  );
};

export default Products;
