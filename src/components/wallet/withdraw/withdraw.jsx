import React from "react";
import { WalletInput } from "../wallet-input/wallet-input";
import { WalletButton } from "../wallet-button/wallet-button";
import { BsXCircle } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import Dropdown from "../dropdown/dropdown";

import "./withdraw.scss";

class Withdrawal extends React.Component {
  constructor() {
    super();

    this.state = {
      bank: "",
      accNum: "",
      amount: "",
      bankError: false,
      accNumError: false,
      amountError: false,
      clear: false,
      isVisible: false,
    };
  }

  handleClearNum = () => {
    this.setState({ accNum: "" });
  };
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleName = (value) => {
    this.setState({ bank: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { bank, accNum, amount } = this.state;

    let formFields = ["bank", "accNum", "amount"];

    let isValid = true;

    formFields.forEach((field) => {
      isValid = this.validateField(field) && isValid;
    });

    if (isValid) {
      console.log(bank);
      console.log(accNum);
      console.log(amount);
      this.setState({
        bank: "",
        accNum: "",
        amount: "",
        clear: true,
      });
    }
  };

  validateField(name) {
    let isValid = false;

    if (name === "bank") isValid = this.validateBank();
    else if (name === "accNum") isValid = this.validateAccNumber();
    else if (name === "amount") isValid = this.validateAmount();

    return isValid;
  }

  validateAmount() {
    let amountError = false;
    const value = this.state.amount;
    if (value.trim() === "") amountError = true;

    this.setState({
      amountError,
    });
    return amountError === false;
  }

  validateAccNumber() {
    let accNumError = false;
    const value = this.state.accNum;
    if (value.trim() === "") accNumError = true;

    this.setState({
      accNumError,
    });
    return accNumError === false;
  }

  validateBank() {
    let bankError = false;
    const value = this.state.bank;
    if (value.trim() === "") bankError = true;

    this.setState({
      bankError,
    });
    return bankError === false;
  }

  render() {
    const { bank, amount, accNum, isVisible } = this.state;

    const act1 = amount.length > 1 && accNum.length > 1;

    const isActive = act1 && bank.length > 1;

    const options = [
      { value: "Zenith Bank", label: "Zenith Bank" },
      { value: "Union Bank", label: "Union Bank" },
      { value: "Kuda", label: "Kuda" },
      { value: "Wema Bank", label: "Wema Bank" },
      { value: "Ecobank", label: "Ecobank" },
    ];

    const visible = isVisible ? <BsEyeSlash /> : <BsEye />;
    const balance = isVisible ? "N5,000,000.00" : "**************";

    return (
      <section className="withdrawal-page">
        <div className="withdrawal-component">
          <div className="withdrawal-pt">Withdrawal</div>
          <div className="bank-bal">
            <div className="bal-comp">
              <span>Available Balance</span>
              <span onClick={() => this.setState({ isVisible: !isVisible })}>
                {visible}
              </span>
            </div>
            <span>{balance}</span>
          </div>
          <div className="withdrawal-ph">Bank Details</div>

          <form onSubmit={this.handleSubmit}>
            <div className="fields">
              <Dropdown
                placeHolder="Select a Bank"
                options={options}
                handleChange={this.handleName}
                onSubmit={this.state.clear}
              />
              <WalletInput
                label="Account Number"
                icon={<BsXCircle />}
                name="accNum"
                clear={this.handleClearNum}
                value={this.state.accNum}
                handleChange={this.handleChange}
                error={this.state.accNumError}
              />
              <WalletInput
                label="Amount"
                icon="NGN"
                name="amount"
                value={this.state.amount}
                handleChange={this.handleChange}
                error={this.state.amountError}
              />
            </div>
            <div className="w-btn">
              <WalletButton type="submit" disabled={!isActive}>
                Withdraw
              </WalletButton>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Withdrawal;
