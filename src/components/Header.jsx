import React, { useState } from "react";
import "../sass/components/_header.scss";
import { Link, useNavigate } from "react-router-dom";
import AIBLogo from "./vectors/AIBLogo";
import AIBTextLogo from "./vectors/AIBTextLogo";
import UserIcon from "./vectors/UserIcon";
import ArrowDown from "./vectors/ArrowDown";
import WarnIcon from "./vectors/WarnIcon";
import Cart from "./vectors/Cart";
import Bell from "./vectors/Bell";
import Search from "./vectors/Search";
import { useAuth } from "../context/AuthContext";
import { getCart, getNotifications } from "../Api";
import { useQuery } from "@tanstack/react-query";

const Header = () => {
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const handleLogout = (e) => {
    e.preventDefault();

    logout();
  };

  // Queries
  const cartQuery = useQuery({ queryKey: ["cart"], queryFn: getCart });
  const notificationQuery = useQuery({
    queryKey: ["notification"],
    queryFn: getNotifications,
  });

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
            <Search />
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
              {cartQuery.data && (
                <span className="indicator-value">
                  {cartQuery.data.data.count}
                </span>
              )}
              <Cart />
            </div>
            <span>Cart</span>
          </Link>

          <Link to="/notifications" className="navItem">
            <div className="indicator">
              {notificationQuery.data && (
                <span className="indicator-value">
                  {notificationQuery.data.data.count}
                </span>
              )}
              <Bell className="bell" />
            </div>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
