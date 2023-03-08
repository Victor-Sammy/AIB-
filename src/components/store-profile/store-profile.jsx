import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { HiLocationMarker } from 'react-icons/hi'
import { BsPlus } from 'react-icons/bs'
import { MdOutlineManageAccounts } from 'react-icons/md'
import './store-profile.scss'
import ThumbUp from '../../assets/thumbup.png'
import ThumbDown from '../../assets/thumbdown.png'
import LikesIcon from '../../assets/likes.png'
import axios from 'axios'
import Pic from '../../assets/d-img.png'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsArrowRightShort } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { useAuth } from '../../context/AuthContext'
import coverPhoto from '../../assets/unsplash_c9FQyqIECds.png'

const StoreProfile = () => {
  const navigate = useNavigate()

  const { user } = useAuth()

  //const user = useSelector(selectUser)
  const [profile, setProfile] = useState()
  const [value, setValue] = useState(1)
  const [store, setStore] = useState([])
  const [addToWishlist, setAddToWishlist] = useState(false)

  const url_key = user

  useEffect(() => {
    getStoreData()
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=8')
    const data = await response.json()
    setStore(data)
  }

  const getStoreData = () => {
    axios
      .get('ad/store/')
      .then((response) => {
        console.log(response.data)
        const storeData = response.data

        const mainStore = storeData?.results?.find(
          (store) => store.owner === url_key
        )

        setProfile(mainStore)
      })
      .catch((error) => console.error(`Error: ${error}`))
  }

  return (
    <div
      className='store-profile'
      id='store-profile'
      onload={() => navigate('items')}
    >
      <div className='sp-top' id='sp-top'>
        {profile ? (
          <div className='sp-cover' id='sp-cover'>
            <img src={profile ? profile.profile_image : coverPhoto} alt='' />
          </div>
        ) : (
          <div className='header-cover'>
            <img src={coverPhoto} alt='' />
          </div>
        )}
      </div>
      <div className='st-flex' id='st-flex'>
        <div className='store-content' id='store-content'>
          <div className='store-info' id='store-info'>
            {profile ? (
              <div className='sp-img' id='sp-img'>
                <img src={profile ? profile.profile_image : Pic} alt='' />
              </div>
            ) : (
              <div className='header-icon' id='header-icon'>
                <AiOutlineUser />
              </div>
            )}
            <div className='sp-name' id='sp-name'>
              <span>{profile ? profile.name : 'Store Name'}</span>
            </div>
            <div className='sp-location' id='sp-location'>
              <HiLocationMarker />
              <span>{profile ? profile.adress : 'Store location'}</span>
            </div>
            <div className='sp-description' id='sp-description'>
              <span>{profile ? profile.description : 'Store Description'}</span>
            </div>
            <div className='sp-option' id='sp-option'>
              <div
                className='sp-add'
                id='sp-add'
                onClick={() => navigate('/addCategory')}
              >
                <span>Sell</span>
                <BsPlus />
              </div>
              <div
                className='sp-profile'
                id='sp-profile'
                onClick={() => navigate('/editProfile')}
              >
                <span>Edit Profile</span>
                <MdOutlineManageAccounts />
              </div>
            </div>

            <div className='sp-engagements' id='sp-engagements'>
              <div className='sp-fb' id='sp-fb'>
                <img src={LikesIcon} alt='icon' />
                <div>
                  <span>Likes</span>
                  <span>(2M)</span>
                </div>
              </div>
              <div className='sp-fb' id='sp-fb'>
                <img src={ThumbUp} alt='icon' />
                <div>
                  <span>
                    Positive <br /> Experiences
                  </span>
                  <span>(2M)</span>
                </div>
              </div>
              <div className='sp-fb' id='sp-fb'>
                <img src={ThumbDown} alt='icon' />
                <div>
                  <span>
                    Negative <br /> Experiences
                  </span>
                  <span>(2M)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='store-products' id='store-products'>
          <div className='store-split' id='store-split'>
            <div
              className={value === 1 ? 'active' : 'sp-si'}
              onClick={() => setValue(1)}
              id='active'
            >
              <span>Store Items</span>
            </div>
            <div
              className={value !== 1 ? 'active' : 'sp-si'}
              onClick={() => setValue(2)}
            >
              <span>Reviews</span>
            </div>
          </div>
          {value === 1 ? (
            <div className='st-items' id='st-items'>
              <div className='st-items-head' id='st-items-head'>
                <div className='btn' id='btn' onClick={() => navigate('#')}>
                  <div className='btn-txt' id='btn-txt'>
                    See All
                  </div>
                  <div className='arr-icon' id='arr-icon'>
                    <BsArrowRightShort />
                  </div>
                </div>
              </div>

              <div className='st-items-display' id='st-items-display'>
                <div className='slide' id='slide'>
                  {store.map((value) => {
                    return (
                      <div key={value.id} className='item' id='item'>
                        <NavLink
                          to={`/products/${value.id}`}
                          className='trend-link'
                        >
                          <div className='image' id='image'>
                            <img src={value.image} alt='' />
                          </div>
                          <div className='details' id='details'>
                            <div className='item-name' id='item-name'>
                              <span>{value.category}</span>
                            </div>
                            <div className='store-name' id='store-name'>
                              <span>Chicken Factory</span>
                            </div>
                            <div className='price' id='price'>
                              <span>NGN {value.price}</span>
                            </div>
                            <div className='rating' id='rating'>
                              <span className='stars'>⭐⭐⭐⭐⭐</span>
                            </div>
                          </div>
                        </NavLink>
                        <div className='wishlist-icon' id='wishlist-icon'>
                          <AiOutlineHeart
                            key={value.id}
                            onClick={() => setAddToWishlist(!addToWishlist)}
                            className={`heart-icon ${
                              addToWishlist ? 'heart-active' : ''
                            }`}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className='st-review' id='st-review'>
              <div className='st-review-head' id='st-review-head'>
                <div className='btn' id='btn' onClick={() => navigate('#')}>
                  <div className='btn-txt' id='btn-txt'>
                    See All
                  </div>
                  <div className='arr-icon' id='arr-icon'>
                    <BsArrowRightShort />
                  </div>
                </div>
              </div>
              <div className='st-review-display'>
                <div className='review-img' id='review-img'>
                  <img
                    src='https://images.pexels.com/photos/4177650/pexels-photo-4177650.jpeg?auto=compress&cs=tinysrgb&w=600'
                    alt='img'
                  />
                </div>
                <div className='review-details' id='review-details'>
                  <div className='r-top' id='r-top'>
                    <span className='r-name' id='r-name'>
                      Jimoh Wisdom
                    </span>
                    <div className='r-date' id='r-date'>
                      13 Aug 2022
                    </div>
                  </div>
                  <div className='r-rating' id='r-rating'>
                    <span className='stars'>⭐⭐⭐⭐⭐</span>
                  </div>
                  <div className='r-subject' id='r-subject'>
                    <span>
                      I am very impressed with the qualities, really amazing!
                    </span>
                  </div>
                  <div className='r-comment' id='r-comment'>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Elementum amet, lacus amet neque. Quam vulputate lectus
                      leo egestas cum. Tincidunt nisi, nascetur risus rhoncus
                      placerat tortor maecenas. Morbi hendrerit nunc donec
                      egestas.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default StoreProfile
