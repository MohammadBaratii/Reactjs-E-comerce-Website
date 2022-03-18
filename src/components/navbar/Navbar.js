import React from "react";
import classes from "./Navbar.module.css";
import { FiShoppingCart, FiHome } from "react-icons/fi";
import { MdShoppingBag } from "react-icons/md";
import { VscHome } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Navbar = ({ totalItems }) => {
  // const [activeNavbar, setActiveNavbar] = useState(false);
  // useEffect(() => {
  //   window.onscroll = () => {
  //     if (window.pageYOffset >= 32) {
  //       setActiveNavbar(true);
  //     } else {
  //       setActiveNavbar(false);
  //     }
  //   };
  // });

  return (
    <div className={classes.navbar}>
      <Link to="/" className={classes["navbar__home"]}>
        <MdShoppingBag /> My Store
      </Link>
      <div className={classes["navbar__actions"]}>
        <Link to="/">
          <FiHome />
        </Link>
        <Link to="/cart" className={classes["navbar__cart"]}>
          <FiShoppingCart />
          <span>{totalItems}</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
