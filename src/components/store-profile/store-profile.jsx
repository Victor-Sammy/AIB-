import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { HiLocationMarker } from 'react-icons/hi'
import { BsPlus } from 'react-icons/bs'
import { MdOutlineManageAccounts } from 'react-icons/md'
import './store-profile.scss'
import ThumbUp from '../../assets/thumbup.png'
import ThumbDown from '../../assets/thumbdown.png'
import LikesIcon from '../../assets/likes.png'
import Pic from '../../assets/d-img.png'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsArrowRightShort } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import coverPhoto from '../../assets/unsplash_c9FQyqIECds.png'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import PopUp from './PopUp'
import { getStoreItems } from '../../Api/store'
import { useQuery } from '@tanstack/react-query'

const StoreProfile = () => {
  const navigate = useNavigate()

  const [value, setValue] = useState(1)
  const [addToWishlist, setAddToWishlist] = useState(false)

  const { data, isLoading, isError } = useQuery({
    queryKey: [`storeItems`],
    queryFn: () => getStoreItems(),
  })
  const storeInfo = data?.data?.results[0]
  const storeItems = data?.data?.results[0].store_product
  console.log(storeInfo)
  console.log(storeItems)
  //console.log(data.data)

  if (isLoading) return <h1>...Loading</h1>
  if (isError) return <h1>Error Loading Products</h1>

  const Blurry = () => {
    e.preventDefault()
  }

  const styles = {
    main: {
      opacity: '50%',
    },
  }

  return (
    <div
      className='store-profile'
      id='store-profile'
      onload={() => navigate('items')}
    >
      <div className='sp-top' id='sp-top'>
        {storeInfo ? (
          <div className='sp-cover' id='sp-cover'>
            <img src={coverPhoto} alt='' />
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
            {storeInfo ? (
              <div className='sp-img' id='sp-img'>
                <img src={storeInfo ? storeInfo?.profile_image : Pic} alt='' />
              </div>
            ) : (
              <div className='header-icon' id='header-icon'>
                <AiOutlineUser />
              </div>
            )}
            <div className='sp-name' id='sp-name'>
              <span>{storeInfo ? storeInfo?.name : 'Store Name'}</span>
            </div>
            <div className='sp-location' id='sp-location'>
              <HiLocationMarker />
              <span>{storeInfo ? storeInfo?.address : 'Store location'}</span>
            </div>
            <div className='sp-description' id='sp-description'>
              <span>
                {storeInfo ? storeInfo?.description : 'Store Description'}
              </span>
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
                <span>Edit Store</span>
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
                  {storeItems.map((item) => {
                    return (
                      <div key={item?.id} className='item' id='item'>
                        <NavLink
                          to={`/products/${item.id}`}
                          className='trend-link'
                          id='trend-link'
                        >
                          <div className='image' id='image'>
                            <img src={item?.images[0]?.image} alt='' />
                          </div>
                          <div className='details' id='details'>
                            <div className='item-name' id='item-name'>
                              <span>{item?.name}</span>
                            </div>
                            <div className='store-name' id='store-name'>
                              <span>
                                {storeInfo ? storeInfo?.name : 'Store Name'}
                              </span>
                            </div>
                            <div className='price' id='price'>
                              <span>NGN {item?.price}</span>
                            </div>
                            <div className='rating' id='rating'>
                              <span className='stars'>⭐⭐⭐⭐⭐</span>
                            </div>
                          </div>
                        </NavLink>
                        <div onClick={Blurry}>
                          <Popup
                            contentStyle={{ width: '35%', height: 'auto' }}
                            trigger={<button> Edit </button>}
                            position='center'
                            nested
                          >
                            <PopUp id={item?.id} />
                          </Popup>
                        </div>
                        <div className='wishlist-icon' id='wishlist-icon'>
                          <AiOutlineHeart
                            key={item?.id}
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
