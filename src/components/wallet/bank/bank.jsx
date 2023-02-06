import React from "react";
import { WalletInput } from "../wallet-input/wallet-input";
import { WalletButton } from "../wallet-button/wallet-button";
import { BsXCircle } from "react-icons/bs";
import Dropdown from "../dropdown/dropdown";
import "./bank.scss";

class AddBank extends React.Component {
  constructor() {
    super();

    this.state = {
      bank: "",
      accNum: "",
      accName: "",
      bankError: false,
      accNumError: false,
      accNameError: false,
      clear: false,
    };
  }

  handleClearNum = () => {
    this.setState({ accNum: "" });
  };
  handleClearName = () => {
    this.setState({ accName: "" });
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

    const { bank, accName, accNum } = this.state;

    let formFields = ["bank", "accName", "accNum"];

    let isValid = true;

    formFields.forEach((field) => {
      isValid = this.validateField(field) && isValid;
    });

    if (isValid) {
      console.log(bank);
      console.log(accName);
      console.log(accNum);
      this.setState({
        bank: "",
        accNum: "",
        accName: "",
        clear: true,
      });
    }
  };

  validateField(name) {
    let isValid = false;

    if (name === "bank") isValid = this.validateBank();
    else if (name === "accNum") isValid = this.validateAccNumber();
    else if (name === "accName") isValid = this.validateAccName();

    return isValid;
  }

  validateAccName() {
    let accNameError = false;
    const value = this.state.accName;
    if (value.trim() === "") accNameError = true;

    this.setState({
      accNameError,
    });
    return accNameError === false;
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
    const { bank, accName, accNum } = this.state;

    const act1 = accName.length > 1 && accNum.length > 1;

    const isActive = act1 && bank.length > 1;

    const options = [
      { value: "Zenith Bank", label: "Zenith Bank" },
      { value: "Union Bank", label: "Union Bank" },
      { value: "Kuda", label: "Kuda" },
      { value: "Wema Bank", label: "Wema Bank" },
      { value: "Ecobank", label: "Ecobank" },
    ];

    return (
      <section className="bank-page">
        <div className="bank-component">
          <div className="bank-pt">Add Bank</div>
          <div className="bank-ph">Bank Details</div>

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
                value={this.state.accNum}
                clear={this.handleClearNum}
                handleChange={this.handleChange}
                error={this.state.accNumError}
              />
              <WalletInput
                label="Account Name"
                icon={<BsXCircle />}
                name="accName"
                value={this.state.accName}
                clear={this.handleClearName}
                handleChange={this.handleChange}
                error={this.state.accNameError}
              />
            </div>
            <div className="w-btn">
              <WalletButton type="submit" disabled={!isActive}>
                Save
              </WalletButton>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default AddBank;
