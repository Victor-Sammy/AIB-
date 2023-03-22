import React, { useState } from "react";
// import axios from 'axios'
// import { useDispatch } from 'react-redux'
// import { login } from '../../store/userSlice'
import { Button } from "primereact/button";
import "../../sass/components/signin.style.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../form-input/button.component";
import EmailIcon from "../../assets/ema.png";
import LockIcon from "../../assets/lock.png";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
// import { useSelector } from 'react-redux'
// import { selectUser } from '../../store/userSlice'
// import env from '../../Api'
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";

const emailValidator =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SignIn = () => {
  const { login, user } = useAuth();
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const nextUrl = searchParams.get("next");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const validateEmail = (email) => {
    let errorMessage = "";
    if (email.trim() === "") {
      errorMessage = "Email is required";
    } else if (!emailValidator.test(email)) {
      errorMessage = "Enter valid email";
    } else {
      errorMessage = "";
    }

    setEmailError(errorMessage);
    return errorMessage ? false : true;
  };

  const validatePassword = (password) => {
    let errorMessage = "";
    if (password.trim() === "") {
      errorMessage = "Password is required";
    } else if (password.trim().length < 6) {
      errorMessage = "Password length must be greater than 6";
    } else {
      errorMessage = "";
    }

    setPasswordError(errorMessage);
    return errorMessage ? false : true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let validEmail = validateEmail(email);
    let validPassword = validatePassword(password);

    if (validEmail && validPassword) {
      setLoading(true);
      const cartID = localStorage.getItem("cartID");
      login({
        email,
        password,
        ...(cartID ? { cartID } : {}),
      })
        .then(() => {
          setLoading(false);
          toast.success("Successful Login");
          nextUrl
            ? navigate(nextUrl, { replace: true })
            : navigate("/home", { replace: true });
        })
        .catch((err) => {
          setLoading(false);
          setFormError(
            err.response?.data?.detail ||
              err.message ||
              "Error login in, check credentials"
          );
        });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "email":
        setEmail(value);
        validateEmail(value);
        break;
      case "password":
        setPassword(value);
        validatePassword(value);
        break;
      default:
        break;
    }
    setFormError("");
  };

  if (!user) {
    return (
      <div className="sign-in">
        <div className="signIn-head">
          <h2>Login</h2>
          <span>Login to your account to continue</span>
        </div>

        <form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={email}
            label="Email"
            icon={EmailIcon}
            handleChange={handleChange}
            error={emailError}
            onBlur={(e) => validateEmail(email)}
          />

          <FormInput
            name="password"
            type="password"
            value={password}
            label="Password"
            icon={LockIcon}
            handleChange={handleChange}
            error={passwordError}
            onBlur={(e) => validatePassword(password)}
          />

          <div className="forgot-pass">
            <span onClick={() => navigate("/reset")}>Forgot Password?</span>
          </div>
          <span className="formError">{formError}</span>
          <CustomButton disabled={loading} loading={loading} type="submit">
            Login
          </CustomButton>
        </form>
        <div className="sub-footer">
          <span>New to AIB? </span>
          <Link to={nextUrl ? `/signup?next=${nextUrl}` : "/signup"}>
            <span>Create Account</span>
          </Link>
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

export default SignIn;
