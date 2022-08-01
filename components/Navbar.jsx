import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";
import { AiOutlineShopping, AiFillHome } from "react-icons/ai";
import { BiHeadphone } from "react-icons/bi";
import { MdOutlinePointOfSale } from "react-icons/md";
import Cart from "./Cart";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <>
      <div className="navbar-container">
        <BiHeadphone className="nav-logo" size={35} />
        <p className="logo">
          {/* <Link href="/">
          <p className="logo-items">Home</p>
        </Link>
        <p> | </p> */}
          <Link href="/">
            <p className="logo-items title">PAXECO</p>
          </Link>
          {/* <p> | </p>
        <Link href="/">
          <p className="logo-items">Autumn Sale</p>
        </Link> */}
        </p>
        <div className="right-nav">
          <button className="login">Login</button>
          <button
            type="button"
            className="cart-icon"
            onClick={() => {
              setShowCart(true);
            }}
          >
            <AiOutlineShopping size={35} />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>
        </div>
      </div>

      {showCart && <Cart />}
    </>
  );
};

export default Navbar;
