import React, { Component } from "react";
import { useParams } from "react-router-dom";
import CardPage from "./card/card";
import AddBank from "./bank/bank";
import Deposit from "./deposit/deposit";
import Withdrawal from "./withdraw/withdraw";

import Dashboard from "./dashboard/dashboard";
import NavBar from "./dashboard/navbar";
import "./wallet.scss";

const Wallet = () => {
  const { page } = useParams();

  switch (page) {
    case "dashboard":
      Component = <Dashboard />;
      break;
    case "card":
      Component = <CardPage />;
      break;
    case "bank":
      Component = <AddBank />;
      break;
    case "deposit":
      Component = <Deposit />;
      break;
    case "withdraw":
      Component = <Withdrawal />;
      break;
    default:
      Component = <Dashboard />;
      break;
  }

  return (
    <div className="wallet">
      <NavBar currentPage={page} />
      {Component}
    </div>
  );
};

export default Wallet;
