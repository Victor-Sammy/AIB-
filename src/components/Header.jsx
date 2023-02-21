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
import { getCart, getNotifications } from "../Api/Api";
import { useQuery } from "@tanstack/react-query";
import Hamburger from "./vectors/Hamburger";
import Close from "./vectors/Close";
import ICONS from "../assets/other-icons.png";
import manGreen from "../assets/manGreen.png";
import ladyBlue from "../assets/ladyBlue.png";
import plugOrange from "../assets/plugOrange.png";
import manPurple from "../assets/manPurple.png";
import gameOrange from "../assets/gameOrange.png";
import sofaYellow from "../assets/sofaYellow.png";
import monitorGrey from "../assets/monitorGrey.png";
import mobilePurple from "../assets/mobilePurple.png";
import stackPurple from "../assets/stackPurple.png";

const Header = () => {
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const [navOpen, setNavOpen] = useState(true);

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
    <>
      <div className="wrapper header">
        <div className="header__menu">
          <div
            className="header__menu-button mobile"
            onClick={() => {
              setNavOpen(true);
            }}
          >
            <Hamburger />
          </div>
          <Link to="/home" className="header__menu-logo">
            <AIBLogo />
            <AIBTextLogo fill="#062341" />
          </Link>
        </div>

        <div className="header__content">
          <form
            className="header__content-search desktop"
            onSubmit={searchSubmit}
          >
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
                <span className="desktop">{user.username}</span>
                {/* <AiOutlineCaretDown /> */}
                <ArrowDown className="desktop" />
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
                <span className="desktop">Login</span>
              </Link>
            )}

            <div className="navItem desktop">
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
              <span className="desktop">Cart</span>
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
      <div className="wrapper headerSearch mobile">
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
      </div>
      {navOpen && (
        <div
          class="navWrap"
          onClick={() => {
            setNavOpen(false);
          }}
        ></div>
      )}
      <div class={`navContent mobile ${navOpen ? "open" : ""}`}>
        <div className="header__menu">
          <div
            className="header__menu-button"
            onClick={() => {
              setNavOpen(false);
            }}
          >
            <Close />
          </div>
          <Link
            to="/home"
            onClick={() => {
              setNavOpen(false);
            }}
            className="header__menu-logo"
          >
            <AIBLogo />
            <AIBTextLogo fill="#062341" />
          </Link>
        </div>

        <h4 className="title">Categories</h4>

        <ul className="categories">
          <li>
            <Link
              to="/product/fashion"
              onClick={() => {
                setNavOpen(false);
              }}
            >
              <img src={manGreen} alt="" />
              Fashion
            </Link>
          </li>
          <li>
            <Link
              to="/product/fashion"
              onClick={() => {
                setNavOpen(false);
              }}
            >
              <img src={ladyBlue} alt="" />
              Cars & Automobile
            </Link>
          </li>
          <li>
            <Link
              to="/product/fashion"
              onClick={() => {
                setNavOpen(false);
              }}
            >
              <img src={plugOrange} alt="" />
              Phones & Tablets
            </Link>
          </li>
          <li>
            <Link
              to="/product/fashion"
              onClick={() => {
                setNavOpen(false);
              }}
            >
              <img src={manPurple} alt="" />
              Property, Housing & Hotels
            </Link>
          </li>
          <li>
            <Link
              to="/product/fashion"
              onClick={() => {
                setNavOpen(false);
              }}
            >
              <img src={gameOrange} alt="" />
              Electronics
            </Link>
          </li>
          <li>
            <Link
              to="/product/fashion"
              onClick={() => {
                setNavOpen(false);
              }}
            >
              <img src={sofaYellow} alt="" />
              Sporting Items
            </Link>
          </li>
          <li>
            <Link
              to="/product/fashion"
              onClick={() => {
                setNavOpen(false);
              }}
            >
              <img src={monitorGrey} alt="" />
              Musical
            </Link>
          </li>
          <li>
            <Link
              to="/product/fashion"
              onClick={() => {
                setNavOpen(false);
              }}
            >
              <img src={mobilePurple} alt="" />
              Health & Beauty
            </Link>
          </li>
          <li>
            <Link
              to="/product/fashion"
              onClick={() => {
                setNavOpen(false);
              }}
            >
              <img src={stackPurple} alt="" />
              Furniture & Appliances
            </Link>
          </li>
          <li>
            <Link
              to="/product/fashion"
              onClick={() => {
                setNavOpen(false);
              }}
            >
              <img src={stackPurple} alt="" />
              Food, Restaurants & Agric
            </Link>
          </li>
          <li>
            <Link
              to="/product/fashion"
              onClick={() => {
                setNavOpen(false);
              }}
            >
              <img src={stackPurple} alt="" />
              Commercial Equipments
            </Link>
          </li>
          <li>
            <Link
              to="/product/fashion"
              onClick={() => {
                setNavOpen(false);
              }}
            >
              <img src={stackPurple} alt="" />
              Animals & Pets
            </Link>
          </li>
          <li>
            <Link
              to="/product/fashion"
              onClick={() => {
                setNavOpen(false);
              }}
            >
              <img src={stackPurple} alt="" />
              Babies & Kids
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
