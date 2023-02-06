import React, { useState } from "react";

import "./navbar.scss";
import Wallet from "../../../assets/wallet.png";
import Cart from "../../../assets/cart.png";
import Inbox from "../../../assets/inbox.png";
import Favorites from "../../../assets/favorites.png";
import Viewed from "../../../assets/viewed.png";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ currentPage }) => {
  const navigate = useNavigate();

  return (
    <section className="dash-nav">
      <div className="nav-body">
        <div className="links">
          <ul>
            <div
              onClick={() => navigate("/wallet/dashboard")}
              className={
                window.location.pathname === "/wallet/dashboard" ? "active" : ""
              }
            >
              <li>
                <img src={Wallet} alt="pic" />
                <span>Wallet Dashboard</span>
              </li>
            </div>
            <div
              onClick={() => navigate("/wallet/card")}
              className={
                window.location.pathname === "/wallet/card" ? "active" : ""
              }
            >
              <li>
                <img src={Cart} alt="pic" />
                <span>Card</span>
              </li>
            </div>
            <div
              onClick={() => navigate("/wallet/bank")}
              className={
                window.location.pathname === "/wallet/bank" ? "active" : ""
              }
            >
              <li>
                <img src={Inbox} alt="pic" />
                <span>Bank</span>
              </li>
            </div>
            <div
              onClick={() => navigate("/wallet/deposit")}
              className={
                window.location.pathname === "/wallet/deposit" ? "active" : ""
              }
            >
              <li>
                <img src={Favorites} alt="pic" />
                <span>Deposit</span>
              </li>
            </div>
            <div
              onClick={() => navigate("/wallet/withdraw")}
              className={
                window.location.pathname === "/wallet/withdraw" ? "active" : ""
              }
            >
              <li>
                <img src={Viewed} alt="pic" />
                <span>Withdrawal</span>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
