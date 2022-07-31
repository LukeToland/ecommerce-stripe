import React, { useRef } from "react";
import Link from "next/link";
import { useStateContext } from "../context/StateContext";
import {
  AiOutlineCloseCircle,
  AiOutlineMinus,
  AiOutlineShopping,
  AiOutlinePlus,
  AiOutlineLeft,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";
import { urlFor } from "../lib/client";

const Cart = () => {
  const {
    showCart,
    setShowCart,
    cartItems,
    totalQuantities,
    totalPrice,
    incQty,
    decQty,
    qty,
  } = useStateContext();
  const cartRef = useRef();
  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          className="cart-heading"
          type="button"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>

        {/* EMPTY STATE */}
        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <button
              type="button"
              className="btn"
              onClick={() => setShowCart(false)}
            >
              Continue Shopping
            </button>
          </div>
        )}

        {/* ITEMS IN CART */}
        <div className="product-container">
          {cartItems.length > 0 &&
            cartItems?.map((item, index) => (
              <div key={item._id} className="product">
                <img
                  className="cart-product-image"
                  src={urlFor(item?.image[0])}
                  alt=""
                />
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item.name}</h5>
                    <h4>${item.price.toFixed(2)}</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <span className="minus" onClick="">
                          <AiOutlineMinus />
                        </span>
                        <span className="num">0</span>
                        <span className="plus" onClick="">
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button type="button" class="remove-item" onClick="">
                      <TiDeleteOutline size={25} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
