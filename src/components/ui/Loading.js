import React from "react";
import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={classes.loading}>
      <h1>Loading</h1>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Loading;
