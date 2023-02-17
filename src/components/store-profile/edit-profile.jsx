import React, { useEffect, useRef, useState } from "react";
import "./edit-profile.scss";
import { BsFillImageFill } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { selectUser } from "../../store/userSlice";
import { useSelector } from "react-redux";
import axios from "axios";
import { AiOutlineUser } from "react-icons/ai";
import { toast } from "react-toastify";

const EditProfile = () => {
  //const user = useSelector(selectUser)
  const [pic, setPic] = useState('')
  const [selectedImage, setSelectedImage] = useState('')
  // const [storeName, setStoreName] = useState('')
  // const [location, setLocation] = useState('')
  // const [description, setDescription] = useState('')
  // const [delivery, setDelivery] = useState('')
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [dob, setDOB] = useState('')
  const [address, setAddress] = useState('')
  const [gender, setGender] = useState('')

  const [data, setData] = useState({
    storeName: '',
    location: '',
    delivery: '',
    description: '',
  })
  const [error, setError] = useState('')

  // const dispatch = useDispatch();
  const navigate = useNavigate()

  let form_data = new FormData()

  // if (pic) form_data.append('owner', user)
  form_data.append('profile_image', selectedImage)
  form_data.append('name', data.storeName)
  form_data.append('description', data.description)
  form_data.append('adress', data.location)
  form_data.append('delivery', JSON.stringify(data.delivery))

  const handle = (e) => {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    switch (name) {
      case 'storeName':
        setStoreName(value)
        break
      case 'location':
        setLocation(value)
        break
      case 'description':
        setDescription(value)
        break
      case 'delivery':
        setDelivery(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'firstName':
        setFirstName(value)
        break
      case 'lastName':
        setLastName(value)
        break
      case 'phone':
        setPhone(value)
        break
      case 'dob':
        setDOB(value)
        break
      case 'address':
        setAddress(value)
        break
      case 'gender':
        setGender(value)
        break
      default:
        break
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    axios
      .post("/stores/", form_data, {
        headers: {
          'content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.status !== 200) {
          //   setError(response);
          // }
          // console.log("Store Success");
          // console.log(response);

          // setPhoto("");
          // setStoreName("");
          // setLocation("");
          // setDescription("");
          // setDelivery("");
          // setEmail("");
          // setFirstName("");
          // setLastName("");
          // setPhone("");
          // setDOB("");
          // setAddress("");
          // setGender("");
          // navigate("/profile");
          toast.error('An error occurred:', response)
        }
      })
      .catch((error) => {
        toast.error('An error occurred:', error.response)
        console.log('An error occurred:', error.response)
      })
  }

  const option = [
    { label: 'True', value: 'True' },
    { label: 'False', value: 'False' },
  ]

  const option2 = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ]

  const filePicekerRef = useRef()

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files)

    // const reader = new FileReader()
    // // Gettting Selected File (user can select multiple but we are choosing only one)
    // // console.log(e.target.files[0]);
    // if (selectedFile) {
    //   reader.readAsDataURL(selectedFile)
    // }
    // reader.onload = (readerEvent) => {
    //   if (selectedFile.type.includes('image')) {
    //     setSelectedImage(readerEvent.target.result)
    //   }
    // }
  }

  return (
    <div className='edit-page'>
      <div className='back-arr' onClick={() => navigate('/profile')}>
        <IoIosArrowRoundBack />
      </div>
      <form className='edit-box' onSubmit={handleSubmit}>
        <div className='e-header'>
          <span>Edit Profile</span>
        </div>
        <div className='e-img'>
          <div className='img'>
            {data.image_url ? (
              <div className='header-icon'>
                <img src={pic} alt='Store img' />
              </div>
            ) : (
              <div className='header-icon'>
                <AiOutlineUser />
              </div>
            )}
          </div>

          <div
            className='icon-load'
            onClick={() => filePicekerRef.current.click()}
          >
            <BsFillImageFill />
            Upload Photo
          </div>
          <input
            ref={filePicekerRef}
            onChange={(e) => {
              handleImageChange(e)
            }}
            type='file'
            multiple
            accept='imag/jpeg,imag/png,imag/gif'
            hidden
          />
        </div>

        <div className='e-details'>
          <div className='e-d-left'>
            <div className='input'>
              <span>Store Name</span>
              <InputText
                id='storeName'
                name='storeName'
                value={data.storeName}
                onChange={handle}
                required
              />
            </div>
            <div className='input'>
              <span>Location</span>
              <InputText
                type='text'
                name='location'
                id='location'
                value={data.location}
                onChange={handle}
                required
              />
            </div>
          </div>
          <div className='e-d-right'>
            <div className='input'>
              <span>Description</span>
              <InputText
                type='text'
                name='description'
                id='description'
                value={data.description}
                onChange={handle}
                required
              />
            </div>
            <div className='input'>
              <span></span>
              <Dropdown
                // optionLabel="name"
                className='d-input'
                name='delivery'
                id='delivery'
                value={data.delivery}
                options={option}
                onChange={handle}
                placeholder='Delivery'
              />
              {/* <select
                name="delivery"
                id="delivery"
                value={delivery}
                onChange={handleChange}
                required
              >
                <option value="delivery">Delivery</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select> */}
            </div>
          </div>
        </div>

        <div className='e-personal'>
          <div className='personal-head'>
            <span>Personal Details</span>
          </div>
          <div className='personal-details'>
            <div className='e-d-left'>
              <div className='input'>
                <span>Email</span>
                <InputText
                  type='email'
                  name='email'
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className='input'>
                <span>First Name</span>
                <InputText
                  type='text'
                  name='firstName'
                  value={firstName}
                  onChange={handleChange}
                />
              </div>
              <div className='input'>
                <span>Date of Birth (Opt)</span>
                <input
                  type='date'
                  name='dob'
                  value={dob}
                  onChange={handleChange}
                />
              </div>
              <div className='input'>
                <span> </span>
                <Dropdown
                  // optionLabel="name"
                  className='d-input'
                  name='gender'
                  value={gender}
                  options={option2}
                  onChange={handleChange}
                  placeholder='Gender'
                />
                {/* <select
                  name="gender"
                  id="gender"
                  value={gender}
                  onChange={handleChange}
                  required
                >
                  <option value="gender">Gender</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                </select> */}
              </div>
            </div>
            <div className='e-d-right'>
              <div className='input'>
                <span className='phone'>Mobile Number</span>
                {/* <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                  required
                /> */}
                <PhoneInput
                  defaultCountry='NG'
                  value={phone}
                  onChange={setPhone}
                />
              </div>
              <div className='input'>
                <span>Last Name</span>
                <InputText
                  type='text'
                  name='lastName'
                  value={lastName}
                  onChange={handleChange}
                />
              </div>
              <div className='input'>
                <span>Address</span>
                <InputText
                  type='text'
                  name='address'
                  value={address}
                  onChange={handleChange}
                />
              </div>
              <div className='input'>
                <span>Change Password</span>
                <InputText
                  type='text'
                  name='password'
                  value={''}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='e-btn'>
          <button type='submit' onClick={handleSubmit}>
            UPDATE
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditProfile
