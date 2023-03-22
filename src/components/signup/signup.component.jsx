import React from "react";
import "../../sass/components/signup.style.scss";
import { Button } from "primereact/button";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../form-input/button.component";
import EmailIcon from "../../assets/ema.png";
import LockIcon from "../../assets/lock.png";
import ProfileIcon from "../../assets/profile.png";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";

const emailValidator =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;

const SignUp = () => {
  const { register, user } = useAuth();
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const nextUrl = searchParams.get("next");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [tnc, setTnc] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [tncError, setTncError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const validateUsername = (username, check = false) => {
    let usernameError = "";
    if (username.trim() === "") usernameError = "Username is required";

    if (!check) {
      setUsernameError(usernameError);
    }
    return usernameError === "";
  };

  const validateEmail = (email, check = false) => {
    let errorMessage = "";
    if (email.trim() === "") {
      errorMessage = "Email is required";
    } else if (!emailValidator.test(email)) {
      errorMessage = "Enter valid email";
    } else {
      errorMessage = "";
    }

    if (!check) {
      setEmailError(errorMessage);
    }
    return errorMessage ? false : true;
  };

  const validatePassword = (password, check) => {
    let errorMessage = "";
    if (password.trim() === "") {
      errorMessage = "Password is required";
    } else if (!passwordValidator.test(password)) {
      errorMessage =
        "Password must contain at least 6 characters, 1 number, 1 upper and 1 lowercase!";
    } else {
      errorMessage = "";
    }

    if (!check) {
      setPasswordError(errorMessage);
    }
    return errorMessage ? false : true;
  };

  const validateConfirmPassword = (validatePassword, check = false) => {
    let errorMessage = "";
    if (validatePassword.trim() === "") {
      errorMessage = "Confirm Password is required";
    } else if (validatePassword !== password) {
      errorMessage = "Passwords do not match";
    } else {
      errorMessage = "";
    }

    if (!check) {
      setConfirmPasswordError(errorMessage);
    }
    return errorMessage ? false : true;
  };

  const validateTnC = (tnc, check = false) => {
    let tncError = "";
    if (!tnc)
      tncError =
        "You must accept the terms and conditions to register an account";

    if (!check) {
      setTncError(tncError);
    }
    return tncError === "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateFields()) {
      setLoading(true);
      const cartID = localStorage.getItem("cartID");
      register({
        username,
        email,
        password,
        ...(cartID ? { cartID } : {}),
      })
        .then((response) => {
          toast.success("Successful Account Creation");
          setLoading(false);
          console.log("profile", response);

          navigate(`/successfullsignup?e=${email}`, { replace: true });
        })
        .catch((err) => {
          setLoading(false);
          setFormError(
            err.response.data.detail ||
              err.response.data.email ||
              err.message ||
              "Error creating account, check credentials"
          );
        });
    }
  };

  const handleChange = (event) => {
    const { name, value, checked } = event.target;

    switch (name) {
      case "email":
        setEmail(value);
        validateEmail(value);
        break;
      case "password":
        setPassword(value);
        validatePassword(value);
        break;
      case "username":
        setUsername(value);
        validateUsername(value);
        break;
      // case "phone":
      //   setPhone(value);
      //   break;
      case "confirmPassword":
        setConfirmPassword(value);
        validateConfirmPassword(value);
        break;
      case "tnc":
        setTnc(checked);
        validateTnC(checked);
        break;
      default:
        break;
    }

    setFormError("");
    console.log("validDetails", validateFields());
  };

  const validateFields = () => {
    if (
      validateUsername(username, true) &&
      validateEmail(email, true) &&
      validatePassword(password, true) &&
      validateConfirmPassword(confirmPassword, true) &&
      validateTnC(tnc, true)
    ) {
      return true;
    }
    return false;
  };

  if (!user) {
    return (
      <div className="page-up">
        <div className="sign-up">
          <div className="signUp-head">
            <h2>Create Account</h2>
            <span>Create an account to get started</span>
          </div>

          <form onSubmit={handleSubmit}>
            <FormInput
              name="username"
              value={username}
              type="text"
              label="Username"
              icon={ProfileIcon}
              handleChange={handleChange}
              error={usernameError}
              onBlur={(e) => validateUsername(e.target.value)}
            />

            <FormInput
              name="email"
              value={email}
              type="email"
              label="Email"
              icon={EmailIcon}
              handleChange={handleChange}
              error={emailError}
              onBlur={(e) => validateEmail(e.target.value)}
            />

            {/* <div className="phone">
              <PhoneInput
                placeholder="Phone Number"
                className="phone-input"
                // country={"ng"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
                required
              />
              <img src={ProfileIcon} className="form-icon" alt="icon" />
            </div> */}

            <FormInput
              name="password"
              value={password}
              type="password"
              label="Password"
              icon={LockIcon}
              handleChange={handleChange}
              error={passwordError}
              onBlur={(e) => validatePassword(e.target.value)}
            />

            <FormInput
              name="confirmPassword"
              value={confirmPassword}
              type="password"
              label="Confirm Password"
              icon={LockIcon}
              handleChange={handleChange}
              error={confirmPasswordError}
              onBlur={(e) => validateConfirmPassword(e.target.value)}
            />

            <div className="terms">
              <div className="tnc">
                <input type="checkbox" name="tnc" onChange={handleChange} />
                <span>I've read and agreed with the T&C</span>
              </div>
              <div className="error">{tncError}</div>
            </div>

            <span className="formError">{formError}</span>
            <CustomButton disabled={loading} loading={loading} type="submit">
              Create Account
            </CustomButton>
          </form>

          <div className="sub-footer">
            <span>Have an account? </span>
            <Link to={nextUrl ? `/signin?next=${nextUrl}` : "/signin"}>
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="logged-page">
        <div className="logged-box">
          <div className="logged-w">
            <span> {`Welcome ${user.username}`}</span>
          </div>
          <div className="logged-l">
            <span>You are already logged in</span>
          </div>
          <div className="logged-b">
            <Button
              label="Home"
              className="p-button p-button-primary"
              onClick={() => navigate("/home")}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default SignUp;
