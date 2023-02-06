import React from "react";
import { WalletButton } from "../wallet-button/wallet-button";
import { BankWalletButton } from "../wallet-button/wallet-button";
import { WalletInput } from "../wallet-input/wallet-input";
import { WalletInputCV } from "../wallet-input/wallet-input";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles.scss";
import { BsXCircle } from "react-icons/bs";
import "./card.scss";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const cvc = /^[0-9]+$/;

class CardPage extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: "",
      cardNumber: "",
      cvc: "",
      cardDate: "",
      focus: "",
      cardNameError: false,
      cardNumberError: false,
      cvcError: false,
      cardDateError: false,
    };
  }
  handleClearNum = () => {
    this.setState({ cardNumber: "" });
  };
  handleClearName = () => {
    this.setState({ cardName: "" });
  };
  toastSuccess = () => {
    toast.success("Card Added Successfully !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  // handleClear = (name) => {
  //   this.setState({ [name]: "" });
  // };

  handleSubmit = (event) => {
    event.preventDefault();

    const { cardName, cardNumber, cvc, cardDate } = this.state;

    let formFields = ["cardName", "cardNumber", "cvc", "cardDate"];

    let isValid = true;

    formFields.forEach((field) => {
      isValid = this.validateField(field) && isValid;
    });

    if (isValid) {
      console.log(cardName);
      console.log(cardNumber);
      console.log(cvc);
      console.log(cardDate);

      this.setState({
        cardName: "",
        cardNumber: "",
        cvc: "",
        cardDate: "",
      });
      this.toastSuccess();
    }
  };

  validateField(name) {
    let isValid = false;

    if (name === "cardName") isValid = this.validateCardName();
    else if (name === "cardNumber") isValid = this.validateCardNumber();
    else if (name === "cvc") isValid = this.validateCvc();
    else if (name === "cardDate") isValid = this.validateCardDate();

    return isValid;
  }

  validateCardName() {
    let cardNameError = false;
    const value = this.state.cardName;
    if (value.trim() === "") cardNameError = true;

    this.setState({
      cardNameError,
    });
    return cardNameError === false;
  }

  validateCardNumber() {
    let cardNumberError = false;
    const value = this.state.cardNumber;
    if (value.trim() === "") cardNumberError = true;

    this.setState({
      cardNumberError,
    });
    return cardNumberError === false;
  }

  validateCvc() {
    let cvcError = false;
    const value = this.state.cvc;
    if (value.trim() === "") cvcError = true;
    else if (!cvc.test(value)) cvcError = true;

    this.setState({
      cvcError,
    });
    return cvcError === false;
  }

  validateCardDate() {
    let cardDateError = false;
    const value = this.state.cardDate;
    if (value.trim() === "") cardDateError = true;

    this.setState({
      cardDateError,
    });
    return cardDateError === false;
  }

  render() {
    const { cardName, cardNumber, cvc, cardDate } = this.state;

    const act1 = cardName.length > 1 && cardNumber.length > 1;
    const act2 = cvc.length > 1 && cardDate.length > 1;

    const isActive = act1 && act2;

    return (
      <section className="card-page">
        <div className="card-component">
          <div className="card-pt">Add Your Card</div>
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.cardDate}
            focus={this.state.focus}
            name={this.state.cardName}
            number={this.state.cardNumber}
          />

          <div className="card-ph">
            <span>Fill in The Fields Below</span>
            <span>Card Details</span>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="fields">
              <WalletInput
                label="Card Holder Name"
                icon={<BsXCircle />}
                name="cardName"
                clear={this.handleClearName}
                value={this.state.cardName}
                handleChange={this.handleChange}
                onFocus={this.handleInputFocus}
                error={this.state.cardNameError}
              />
              <WalletInput
                label="Card Number"
                icon={<BsXCircle />}
                maxLength={16}
                name="cardNumber"
                pattern="[\d| ]{16,22}"
                clear={this.handleClearNum}
                value={this.state.cardNumber}
                handleChange={this.handleChange}
                onFocus={this.handleInputFocus}
                error={this.state.cardNumberError}
              />
            </div>
            <div className="fields-2">
              <WalletInputCV
                label="CVC"
                maxLength={3}
                // pattern="[0-9]{3}"
                pattern="\d{3,4}"
                name="cvc"
                value={this.state.cvc}
                handleChange={this.handleChange}
                onFocus={this.handleInputFocus}
                error={this.state.cvcError}
              />
              <WalletInputCV
                label="MM/YY"
                maxLength={5}
                name="cardDate"
                pattern="\d\d/\d\d"
                value={this.state.cardDate}
                handleChange={this.handleChange}
                onFocus={this.handleInputFocus}
                error={this.state.cardDateError}
              />
            </div>
            <div className="w-btn">
              <WalletButton type="submit" disabled={!isActive}>
                Add Card
              </WalletButton>
            </div>
          </form>

          <div className="w-or">
            <div></div>
            <span>OR</span>
            <div></div>
          </div>
          <Link to="/wallet/bank">
            <div className="w-btn-b">
              <BankWalletButton>Add Bank</BankWalletButton>
            </div>
          </Link>
        </div>
      </section>
    );
  }
}

export default CardPage;
