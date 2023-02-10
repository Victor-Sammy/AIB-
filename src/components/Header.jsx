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
import WarnIcon from "./vectors/WarnIcon";
import Cart from "./vectors/Cart";
import Bell from "./vectors/Bell";

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

          <div className="navItem">
            <WarnIcon />
            <span>Help</span>
            <ArrowDown />
          </div>

          <Link to="/cart" className="navItem">
            <div className="indicator">
              <span className="indicator-value">3</span>
              <Cart />
            </div>
            <span>Cart</span>
          </Link>

          <Link to="/notifications" className="navItem">
            <div className="indicator">
              <span className="indicator-value">3</span>
              <Bell className="bell" />
            </div>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
