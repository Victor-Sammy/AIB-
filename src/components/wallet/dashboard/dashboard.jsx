import React, { useState } from "react";
import "./dashboard.scss";
import Withdraw from "../../../assets/withdraw.png";
import Deposit from "../../../assets/deposit.png";
import Card from "../../../assets/card.png";
import MoneySend from "../../../assets/money-send.png";
import MoneyAdd from "../../../assets/money-add.png";
import { BsChevronDown } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import DonutChart from "./donutChart";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const visible = isVisible ? <BsEyeSlash /> : <BsEye />;
  const balance = isVisible ? "N5,000,000.00" : "**************";

  return (
    <section className="dashboard-page">
      <div className="dashboard">
        <div className="dash-left">
          <div className="bal-board">
            <div className="board3 "></div>
            <div className="board2"></div>
            <div className="board1"></div>
            <div className="balance">
              <span>Available Balance</span>
              <div className="bal-comp">
                <span>{balance}</span>
                <span onClick={() => setIsVisible(!isVisible)}>{visible}</span>
              </div>
            </div>
          </div>
          <div className="bal-icons">
            <div
              className="b-icons"
              onClick={() => navigate("/wallet/withdraw")}
            >
              <img src={Withdraw} alt="icon" />
              <span>Withdraw</span>
            </div>

            <div
              className="b-icons"
              onClick={() => navigate("/wallet/deposit")}
            >
              <img src={Deposit} alt="icon" />
              <span>Deposit</span>
            </div>

            <div className="b-icons" onClick={() => navigate("/wallet/card")}>
              <img src={Card} alt="icon" />
              <span>Add Card</span>
            </div>
          </div>
          <div className="analysis">
            <div className="analysis-head">
              <span>Spendings</span>
              <div className="dropdown">
                <div
                  className="dropdown-btn"
                  //   onClick={(e) => setIsActive(!isActive)}
                >
                  This Week
                  <span>
                    <BsChevronDown />
                  </span>
                </div>
                {/* {isActive && (
                        <div className="dropdown-content">
                        <div
                            className="dropdown-item"
                            onClick={(e) => {
                            setSelected(e.target.textContent);
                            setIsActive(!isActive);
                            }}
                        >
                            popularity
                        </div>
                        <div
                            className="dropdown-item"
                            onClick={(e) => {
                            setSelected(e.target.textContent);
                            setIsActive(!isActive);
                            }}
                        >
                            price
                        </div>
                        </div>
                    )} */}
              </div>
            </div>
            <div className="analysis-bod">
              <div className="analysis-donut">
                <DonutChart sent={2500} withdrawal={4000} />
              </div>
              <div className="analysis-amount">
                <div className="withdrawal">
                  <span>Total Withdrawal</span>
                  <span>N 897,654.00</span>
                </div>
                <div className="top-up">
                  <span>Total Top-Up</span>
                  <span>N 897,654.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dash-right">
          <div className="tran-head">
            <span>Transaction History</span>
            <div className="btn">
              <div className="btn-txt">See All</div>
              <div className="arr-icon">
                <BsArrowRightShort />
              </div>
            </div>
          </div>
          <div className="tran-history">
            <div className="tran-hist">
              <div className="history">
                <span>Today</span>
                <div className="history-pane">
                  <div className="single-transaction">
                    <div className="h-icon">
                      <img src={MoneySend} alt="icon" />
                    </div>
                    <div className="h-data">
                      <div className="h-data-story">
                        <span>Withdrawal</span>
                        <span>Withdrawn to a bank account</span>
                      </div>
                      <div className="h-data-amt">
                        <span>N 120,500.00</span>
                        <span>Aug 2</span>
                      </div>
                    </div>
                  </div>
                  <div className="single-transaction">
                    <div className="h-icon">
                      <img src={MoneyAdd} alt="icon" />
                    </div>
                    <div className="h-data">
                      <div className="h-data-story">
                        <span>Topped Up</span>
                        <span>via debit card</span>
                      </div>
                      <div className="h-data-amt">
                        <span className="amt-topup">N 120,500.00</span>
                        <span>Aug 2</span>
                      </div>
                    </div>
                  </div>
                  <div className="single-transaction">
                    <div className="h-icon">
                      <img src={MoneySend} alt="icon" />
                    </div>
                    <div className="h-data">
                      <div className="h-data-story">
                        <span>Withdrawal</span>
                        <span>via transfer</span>
                      </div>
                      <div className="h-data-amt">
                        <span>N 120,500.00</span>
                        <span>Aug 2</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="history">
                <span>Yesterday</span>
                <div className="history-pane">
                  <div className="single-transaction">
                    <div className="h-icon">
                      <img src={MoneySend} alt="icon" />
                    </div>
                    <div className="h-data">
                      <div className="h-data-story">
                        <span>Withdrawal</span>
                        <span>Withdrawn to a bank account</span>
                      </div>
                      <div className="h-data-amt">
                        <span>N 120,500.00</span>
                        <span>Aug 1</span>
                      </div>
                    </div>
                  </div>
                  <div className="single-transaction">
                    <div className="h-icon">
                      <img src={MoneyAdd} alt="icon" />
                    </div>
                    <div className="h-data">
                      <div className="h-data-story">
                        <span>Topped Up</span>
                        <span>via debit card</span>
                      </div>
                      <div className="h-data-amt">
                        <span className="amt-topup">N 120,500.00</span>
                        <span>Aug 1</span>
                      </div>
                    </div>
                  </div>
                  <div className="single-transaction">
                    <div className="h-icon">
                      <img src={MoneySend} alt="icon" />
                    </div>
                    <div className="h-data">
                      <div className="h-data-story">
                        <span>Withdrawal</span>
                        <span>via transfer</span>
                      </div>
                      <div className="h-data-amt">
                        <span>N 120,500.00</span>
                        <span>Aug 1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="history">
                <span>Yesterday</span>
                <div className="history-pane">
                  <div className="single-transaction">
                    <div className="h-icon">
                      <img src={MoneySend} alt="icon" />
                    </div>
                    <div className="h-data">
                      <div className="h-data-story">
                        <span>Withdrawal</span>
                        <span>Withdrawn to a bank account</span>
                      </div>
                      <div className="h-data-amt">
                        <span>N 120,500.00</span>
                        <span>Aug 1</span>
                      </div>
                    </div>
                  </div>
                  <div className="single-transaction">
                    <div className="h-icon">
                      <img src={MoneyAdd} alt="icon" />
                    </div>
                    <div className="h-data">
                      <div className="h-data-story">
                        <span>Topped Up</span>
                        <span>via debit card</span>
                      </div>
                      <div className="h-data-amt">
                        <span className="amt-topup">N 120,500.00</span>
                        <span>Aug 1</span>
                      </div>
                    </div>
                  </div>
                  <div className="single-transaction">
                    <div className="h-icon">
                      <img src={MoneySend} alt="icon" />
                    </div>
                    <div className="h-data">
                      <div className="h-data-story">
                        <span>Withdrawal</span>
                        <span>via transfer</span>
                      </div>
                      <div className="h-data-amt">
                        <span>N 120,500.00</span>
                        <span>Aug 1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
