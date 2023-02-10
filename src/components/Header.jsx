import React, { useState } from "react";
import Logo from "../assets/AIB logo.png";
import Title from "../assets/title.png";
import "../sass/components/_header.scss";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";
import { logout } from "../store/userSlice";
import { AiOutlineCaretDown } from "react-icons/ai";
import AIBLogo from "./vectors/AIBLogo";
import AIBTextLogo from "./vectors/AIBTextLogo";
import UserIcon from "./vectors/UserIcon";
import ArrowDown from "./vectors/ArrowDown";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };

  // const user = useSelector(selectUser);
  const user = {
    username: "BlessTheBoy",
    email: "user@example.com",
  };

  const { cartTotalQuantity } = useSelector((store) => store.cart);

  const [searchQuery, setSearchQuery] = useState("");

  const setSearchQueryHandler = (e) => {
    // update searchquery
    setSearchQuery(e.target.value);

    // query new products
  };

  const searchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="wrapper header">
      <div className="header__menu">
        <Link to="/home" className="header__menu-logo">
          <AIBLogo />
          <AIBTextLogo fill="#062341" />
        </Link>
      </div>

      <div className="header__content">
        <form className="header__content-search" onSubmit={searchSubmit}>
          <input
            name="search"
            value={searchQuery}
            onChange={setSearchQueryHandler}
            placeholder="Search products"
          />
          <button type="submit">
            <FiSearch className="s-icon" />
          </button>
        </form>

        <nav className="header__content-nav">
          {user ? (
            <div className="navItem dropdown">
              <UserIcon />
              <span>{user.username}</span>
              {/* <AiOutlineCaretDown /> */}
              <ArrowDown />
              <div className="dropdown-content">
                <div className="topPad"></div>
                <div className="opt">Sell</div>
                <div
                  className="opt"
                  onClick={() => navigate("/wallet/dashboard")}
                >
                  My Wallet
                </div>
                <div className="opt" onClick={() => navigate("/profile")}>
                  Profile
                </div>
                <div className="opt" onClick={(e) => handleLogout(e)}>
                  Logout
                </div>
              </div>
            </div>
          ) : (
            <Link to="/signin" className="navItem">
              <UserIcon />
              <span>Login</span>
            </Link>
          )}

          <div className="help-centre">
            <div className="warn-icon">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 18.9583C5.55832 18.9583 1.54166 14.9417 1.54166 9.99999C1.54166 5.05832 5.55832 1.04166 10.5 1.04166C15.4417 1.04166 19.4583 5.05832 19.4583 9.99999C19.4583 14.9417 15.4417 18.9583 10.5 18.9583ZM10.5 2.29166C6.24999 2.29166 2.79166 5.74999 2.79166 9.99999C2.79166 14.25 6.24999 17.7083 10.5 17.7083C14.75 17.7083 18.2083 14.25 18.2083 9.99999C18.2083 5.74999 14.75 2.29166 10.5 2.29166Z"
                  fill="#012348"
                />
                <path
                  d="M10.5 11.4583C10.1583 11.4583 9.875 11.175 9.875 10.8333V6.66666C9.875 6.32499 10.1583 6.04166 10.5 6.04166C10.8417 6.04166 11.125 6.32499 11.125 6.66666V10.8333C11.125 11.175 10.8417 11.4583 10.5 11.4583Z"
                  fill="#012348"
                />
                <path
                  d="M10.5 14.1667C10.3917 14.1667 10.2833 14.1417 10.1833 14.1C10.0833 14.0583 9.99166 14 9.90832 13.925C9.83332 13.8417 9.77499 13.7583 9.73332 13.65C9.69166 13.55 9.66666 13.4417 9.66666 13.3333C9.66666 13.225 9.69166 13.1167 9.73332 13.0167C9.77499 12.9167 9.83332 12.825 9.90832 12.7417C9.99166 12.6667 10.0833 12.6083 10.1833 12.5667C10.3833 12.4833 10.6167 12.4833 10.8167 12.5667C10.9167 12.6083 11.0083 12.6667 11.0917 12.7417C11.1667 12.825 11.225 12.9167 11.2667 13.0167C11.3083 13.1167 11.3333 13.225 11.3333 13.3333C11.3333 13.4417 11.3083 13.55 11.2667 13.65C11.225 13.7583 11.1667 13.8417 11.0917 13.925C11.0083 14 10.9167 14.0583 10.8167 14.1C10.7167 14.1417 10.6083 14.1667 10.5 14.1667Z"
                  fill="#292D32"
                />
              </svg>
            </div>
            <div className="help-txt">Help</div>
            <div className="help_dropdown">
              <ArrowDown />
            </div>
          </div>

          <div className="cart">
            <div className="cart-icon" onClick={() => navigate("/cart")}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1584 14.7917H6.28335C5.45835 14.7917 4.66668 14.4417 4.10835 13.8333C3.55001 13.225 3.26669 12.4083 3.33335 11.5833L4.02502 3.28333C4.05002 3.02499 3.95835 2.77499 3.78335 2.58333C3.60835 2.39166 3.36668 2.29166 3.10835 2.29166H1.66669C1.32502 2.29166 1.04169 2.00832 1.04169 1.66666C1.04169 1.32499 1.32502 1.04166 1.66669 1.04166H3.11669C3.72503 1.04166 4.30002 1.29999 4.70835 1.74165C4.93335 1.99165 5.10002 2.28333 5.19168 2.60833H15.6C16.4417 2.60833 17.2167 2.94166 17.7834 3.54166C18.3417 4.14999 18.625 4.94166 18.5584 5.78333L18.1084 12.0333C18.0167 13.5583 16.6834 14.7917 15.1584 14.7917ZM5.23335 3.84999L4.58335 11.6833C4.54169 12.1666 4.70002 12.625 5.02502 12.9833C5.35002 13.3416 5.80001 13.5333 6.28335 13.5333H15.1584C16.025 13.5333 16.8084 12.8 16.875 11.9333L17.325 5.68333C17.3583 5.19166 17.2 4.725 16.875 4.38333C16.55 4.03333 16.1 3.84164 15.6084 3.84164H5.23335V3.84999Z"
                  fill="#012348"
                />
                <path
                  d="M13.5417 18.9583C12.625 18.9583 11.875 18.2083 11.875 17.2917C11.875 16.375 12.625 15.625 13.5417 15.625C14.4583 15.625 15.2083 16.375 15.2083 17.2917C15.2083 18.2083 14.4583 18.9583 13.5417 18.9583ZM13.5417 16.875C13.3083 16.875 13.125 17.0583 13.125 17.2917C13.125 17.525 13.3083 17.7083 13.5417 17.7083C13.775 17.7083 13.9583 17.525 13.9583 17.2917C13.9583 17.0583 13.775 16.875 13.5417 16.875Z"
                  fill="#012348"
                />
                <path
                  d="M6.87498 18.9583C5.95831 18.9583 5.20831 18.2083 5.20831 17.2917C5.20831 16.375 5.95831 15.625 6.87498 15.625C7.79165 15.625 8.54165 16.375 8.54165 17.2917C8.54165 18.2083 7.79165 18.9583 6.87498 18.9583ZM6.87498 16.875C6.64165 16.875 6.45831 17.0583 6.45831 17.2917C6.45831 17.525 6.64165 17.7083 6.87498 17.7083C7.10831 17.7083 7.29165 17.525 7.29165 17.2917C7.29165 17.0583 7.10831 16.875 6.87498 16.875Z"
                  fill="#012348"
                />
                <path
                  d="M17.5 7.29166H7.5C7.15833 7.29166 6.875 7.00832 6.875 6.66666C6.875 6.32499 7.15833 6.04166 7.5 6.04166H17.5C17.8417 6.04166 18.125 6.32499 18.125 6.66666C18.125 7.00832 17.8417 7.29166 17.5 7.29166Z"
                  fill="#012348"
                />
              </svg>
              <span>{cartTotalQuantity}</span>
            </div>
            <div className="cart-txt">Cart</div>
          </div>
          <div className="notifications">
            <div className="not-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.02 2.91C8.71003 2.91 6.02003 5.6 6.02003 8.91V11.8C6.02003 12.41 5.76003 13.34 5.45003 13.86L4.30003 15.77C3.59003 16.95 4.08003 18.26 5.38003 18.7C9.69003 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.91C18.02 5.61 15.32 2.91 12.02 2.91Z"
                  stroke="#012348"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M13.87 3.2C13.56 3.11 13.24 3.04 12.91 3C11.95 2.88 11.03 2.95 10.17 3.2C10.46 2.46 11.18 1.94 12.02 1.94C12.86 1.94 13.58 2.46 13.87 3.2Z"
                  stroke="#012348"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.90002 21.18C9.36002 20.64 9.02002 19.88 9.02002 19.06"
                  stroke="#012348"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
