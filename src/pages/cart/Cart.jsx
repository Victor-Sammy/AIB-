import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "../../store/cartSlice";
import "../../sass/pages/_cart.scss";
import Recent from "../../components/Recent";
import { useEffect } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, cartTotalAmount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  if (cartItems.length < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
        <Recent />
      </section>
    );
  }

  return (
    <section className="shopping-cart">
      <div className="cart-title">Cart ({cartItems.length})</div>
      <div className="cart-container">
        <div>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
        <div className="complete-order">
          <h1>Cart Summary</h1>
          <hr className="cart-line" />
          <div className="total">
            <div className="subtotal">
              <h2>Subtotal</h2>
            </div>
            <div className="total-amount">NGN{cartTotalAmount}</div>
          </div>
          <p>Deliveries fees not included</p>
          <hr className="cart-line2" />

          <div className="checkout-btn" onClick={() => navigate("/shipping")}>
            <div className="ck-btn-text">
              <span>Proceed to checkout</span>
            </div>
            <div className="ck-arrw-icon">
              <BsArrowRightShort />
            </div>
          </div>
        </div>
      </div>
      <Recent />
    </section>
  );
};

export default Cart;
