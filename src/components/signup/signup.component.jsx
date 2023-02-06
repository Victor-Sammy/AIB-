import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { login } from '../../store/userSlice'
import '../../sass/components/signup.style.scss'
import { Button } from 'primereact/button'
import { useLocation, useNavigate } from 'react-router-dom'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../form-input/button.component'
import EmailIcon from '../../assets/ema.png'
import LockIcon from '../../assets/lock.png'
import ProfileIcon from '../../assets/profile.png'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../store/userSlice'
import env from '../../Api'
import { toast } from 'react-toastify'

const emailValidator =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/

const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const { API_URL } = env
  const user = useSelector(selectUser)

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [tnc, setTnc] = useState(false)
  const [usernameError, setUsernameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')
  const [tncError, setTncError] = useState('')

  const redirectPath = location.state?.path || '/home'

  const handleSubmit = async (event) => {
    event.preventDefault()

    let formFields = ['username', 'email', 'password', 'confirmPassword', 'TnC']

    let isValid = true

    formFields.forEach((field) => {
      isValid = validateField(field) && isValid
    })

    if (isValid) {
      // dispatch(
      //   login({
      //     username: username,
      //     email: email,
      //     password: password,
      //   })
      // );
      // setUsername("");
      // setEmail("");
      // setPassword("");
      // setConfirmPassword("");
      // setPhone("");
      // setTnc(false);
      // navigate(redirectPath, { replace: true });
      axios
        .post(`${API_URL}/auth/register/`, {
          username: username,
          email: email,
          password: password,
        })
        .then((response) => {
          toast.success('Successful Login')
          console.log('success')
          console.log('profile', response)
          dispatch(
            login({
              username: username,
              email: email,
              password: password,
            })
          )
          setUsername('')
          setPassword('')
          setConfirmPassword('')
          setPhone('')
          setEmail('')
          setTnc(false)
          navigate(redirectPath, { replace: true })
        })
        .catch((error) => {
          console.log('An error occurred', error.response)
          toast.error('An error occurred')
        })
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
      case 'username':
        setUsername(value)
        break
      case 'phone':
        setPhone(value)
        break
      case 'confirmPassword':
        setConfirmPassword(value)
        break
      case 'tnc':
        setTnc(value)
        break
      default:
        break
    }
  }

  const validateField = (name) => {
    let isValid = false

    if (name === 'username') isValid = validateUsername()
    else if (name === 'email') isValid = validateEmail()
    else if (name === 'password') isValid = validatePassword()
    else if (name === 'confirmPassword') isValid = validateConfirmPassword()
    else if (name === 'TnC') isValid = validateTnC()
    return isValid
  }

  const validateUsername = () => {
    let usernameError = ''
    const value = username
    if (value.trim() === '') usernameError = 'Username is required'

    setUsernameError(usernameError)
    return usernameError === ''
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
    else if (!passwordValidator.test(value))
      passwordError =
        'Password must contain at least 6 characters, 1 number, 1 upper and 1 lowercase!'

    setPasswordError(passwordError)
    return passwordError === ''
  }

  const validateConfirmPassword = () => {
    let confirmPasswordError = ''
    if (password !== confirmPassword) {
      confirmPasswordError = 'Passwords do not match'
    }
    setConfirmPasswordError(confirmPasswordError)
    return confirmPasswordError === ''
  }

  const validateTnC = () => {
    let tncError = ''
    if (!tnc)
      tncError =
        'You must accept the terms and conditions to register an account'

    setTncError(tncError)
    return tncError === ''
  }

  if (!user) {
    return (
      <div className='page-up'>
        <div className='sign-up'>
          <div className='signUp-head'>
            <h2>Create Account</h2>
            <span>Create an account to get started</span>
          </div>

          <form onSubmit={handleSubmit}>
            <FormInput
              name='username'
              value={username}
              type='text'
              label='Username'
              icon={ProfileIcon}
              handleChange={handleChange}
              error={usernameError}
            />

            <FormInput
              name='email'
              value={email}
              type='email'
              label='Email'
              icon={EmailIcon}
              handleChange={handleChange}
              error={emailError}
            />

            <div className='phone'>
              <PhoneInput
                placeholder='Phone Number'
                className='phone-input'
                // country={"ng"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
                required
              />
              <img src={ProfileIcon} className='form-icon' alt='icon' />
            </div>

            <FormInput
              name='password'
              value={password}
              type='password'
              label='Password'
              icon={LockIcon}
              handleChange={handleChange}
              error={passwordError}
            />

            <FormInput
              name='confirmPassword'
              value={confirmPassword}
              type='password'
              label='Confirm Password'
              icon={LockIcon}
              handleChange={handleChange}
              error={confirmPasswordError}
            />

            <div className='terms'>
              <div className='tnc'>
                <input
                  type='checkbox'
                  name='tnc'
                  onChange={(e) => setTnc(e.target.checked)}
                />
                <span>I've read and agreed with the T&C</span>
              </div>
              <div className='error'>{tncError}</div>
            </div>

            <CustomButton type='submit'>Create Account</CustomButton>
          </form>

          <div className='sub-footer'>
            <span>Have an account? </span>
            <span onClick={() => navigate('/signin')}>Login</span>
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

export default SignUp
