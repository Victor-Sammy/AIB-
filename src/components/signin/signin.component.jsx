import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { login } from '../../store/userSlice'
import { Button } from 'primereact/button'
import '../../sass/components/signin.style.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../form-input/button.component'
import EmailIcon from '../../assets/ema.png'
import LockIcon from '../../assets/lock.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../store/userSlice'
import env from '../../Api'
import { toast } from 'react-toastify'

const emailValidator =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const SignIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const user = useSelector(selectUser)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  // const [loading, setLoading] = useState(false);

  const redirectPath = location.state?.path || '/home'

  const { API_URL } = env

  axios.defaults.withCredentials = true

  const handleSubmit = (event) => {
    event.preventDefault()
    // setLoading(true);

    let formFields = ['email', 'password']

    let isValid = true

    formFields.forEach((field) => {
      isValid = validateField(field) && isValid
    })

    if (isValid) {
      let passwordError = ''

      dispatch(
        login({
          // username: "Ola",
          email: email,
          password: password,
        })
      )
      setEmail('')
      setPassword('')

      // axios
      //   .post(`${API_URL}/auth/login/`, {
      //     email: email,
      //     password: password,
      //   })
      //   .then((response) => {
      //     console.log("User profile", response.data.username);
      //     const accessToken = response.data.tokens.access;
      //     const refreshToken = response.data.tokens.refresh;
      //     console.log(accessToken, "<<<<>>>>>", refreshToken);
      //     localStorage.setItem("accessToken", JSON.stringify(accessToken));
      //     localStorage.setItem("refreshToken", JSON.stringify(refreshToken));

      //     dispatch(
      //       login({
      //         username: response.data.username,
      //         owner: response.data.id,
      //         email: email,
      //         password: password,
      //       })
      //     );
      //     setEmail("");
      //     setPassword("");
      //     toast.success("Successful Login");
      //     navigate(redirectPath, { replace: true });
      //   })
      //   .catch((error) => {
      //     console.log("An error occurred:", error.response);
      //     passwordError = "Invalid email or password";
      //     toast.error("Invalid email or password");

      //     setPasswordError(passwordError);

      //     return passwordError === "";
      //   });
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    switch (name) {
      case 'email':
        setEmail(value)
        break
      case 'password':
        setPassword(value)
        break
      default:
        break
    }
  }

  const validateField = (name) => {
    let isValid = false

    if (name === 'email') isValid = validateEmail()
    else if (name === 'password') isValid = validatePassword()
    return isValid
  }

  const validateEmail = () => {
    let emailError = ''
    const value = email
    if (value.trim === '') emailError = 'Email is required'
    else if (!emailValidator.test(value)) emailError = 'Email is not valid'

    setEmailError(emailError)

    return emailError === ''
  }

  const validatePassword = () => {
    let passwordError = ''
    const value = password
    if (value.trim === '') passwordError = 'Password is required'

    setPasswordError(passwordError)
    return passwordError === ''
  }
  if (!user) {
    return (
      <div className='page'>
        <div className='sign-in'>
          <div className='signIn-head'>
            <h2>Login</h2>
            <span>Login to your account to continue</span>
          </div>

          <form onSubmit={handleSubmit}>
            <FormInput
              name='email'
              type='email'
              value={email}
              label='Email'
              icon={EmailIcon}
              handleChange={handleChange}
              error={emailError}
            />

            <FormInput
              name='password'
              type='password'
              value={password}
              label='Password'
              icon={LockIcon}
              handleChange={handleChange}
              error={passwordError}
            />

            <div className='forgot-pass'>
              <span onClick={() => navigate('/reset')}>Forgot Password?</span>
            </div>

            <CustomButton type='submit'>Login</CustomButton>
          </form>
          <div className='sub-footer'>
            <span>New to AIB? </span>
            <Link to='/signup'>
              <span>Create Account</span>
            </Link>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='logged-page'>
        <div className='logged-box'>
          <div className='logged-w'>
            <span> {`Welcome ${user.username}`}</span>
          </div>
          <div className='logged-l'>
            <span>You are already logged in</span>
          </div>
          <div className='logged-b'>
            <Button
              label='Home'
              className='p-button p-button-primary'
              onClick={() => navigate('/home')}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default SignIn
