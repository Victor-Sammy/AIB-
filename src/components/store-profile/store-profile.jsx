import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiLocationMarker } from "react-icons/hi";
import { BsPlus } from "react-icons/bs";
import { MdOutlineManageAccounts } from "react-icons/md";
import "./store-profile.scss";
import ThumbUp from "../../assets/thumbup.png";
import ThumbDown from "../../assets/thumbdown.png";
import LikesIcon from "../../assets/likes.png";
import axios from "axios";
import Pic from "../../assets/d-img.png";
import { AiOutlineHeart } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { useAuth } from "../../context/AuthContext";

const StoreProfile = () => {
  const navigate = useNavigate();

  const { user } = useAuth();

  //const user = useSelector(selectUser)
  const [profile, setProfile] = useState();
  const [value, setValue] = useState(1);
  const [store, setStore] = useState([]);
  const [addToWishlist, setAddToWishlist] = useState(false);

  const API_URL = process.env.REACT_APP_API_URL;
  const url_key = user;

  useEffect(() => {
    getStoreData();
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products?limit=5");
    const data = await response.json();
    setStore(data);
  };

  const getStoreData = () => {
    axios
      .get(`${API_URL}/stores`)
      .then((response) => {
        const storeData = response.data;

        const mainStore = storeData?.results?.find(
          (store) => store.owner === url_key
        );

        setProfile(mainStore);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <div className="store-profile" onload={() => navigate("items")}>
      <div className="sp-top">
        {profile ? (
          <div className="sp-img">
            <img src={profile ? profile.profile_image : Pic} alt="" />
          </div>
        ) : (
          <div className="header-icon">
            <AiOutlineUser />
          </div>
        )}

        <div className="sp-name">
          <span>{profile ? profile.name : "Store Name"}</span>
        </div>
        <div className="sp-option">
          <div className="sp-add" onClick={() => navigate("/addCategory")}>
            <span>Sell</span>
            <BsPlus />
          </div>
          <div className="sp-location">
            <HiLocationMarker />
            <span>{profile ? profile.adress : "Store location"}</span>
          </div>
          <div className="sp-profile" onClick={() => navigate("/editProfile")}>
            <span>Edit Profile</span>
            <MdOutlineManageAccounts />
          </div>
        </div>

        <div className="sp-description">
          <span>{profile ? profile.description : "Store Description"}</span>
        </div>
      </div>
      <div className="sp-engagements">
        <div className="sp-fb">
          <img src={LikesIcon} alt="icon" />
          <div>
            <span>Likes</span>
            <span>(2M)</span>
          </div>
        </div>
        <div className="sp-fb">
          <img src={ThumbUp} alt="icon" />
          <div>
            <span>
              Positive <br /> Experiences
            </span>
            <span>(2M)</span>
          </div>
        </div>
        <div className="sp-fb">
          <img src={ThumbDown} alt="icon" />
          <div>
            <span>
              Negative <br /> Experiences
            </span>
            <span>(2M)</span>
          </div>
        </div>
      </div>
      <div className="store-split">
        <div
          className={value === 1 ? "active" : "sp-si"}
          onClick={() => setValue(1)}
        >
          <span>Store Items</span>
        </div>
        <div
          className={value !== 1 ? "active" : "sp-si"}
          onClick={() => setValue(2)}
        >
          <span>Reviews</span>
        </div>
      </div>

      {value === 1 ? (
        <div className="st-items">
          <div className="st-items-head">
            <div className="btn" onClick={() => navigate("#")}>
              <div className="btn-txt">See All</div>
              <div className="arr-icon">
                <BsArrowRightShort />
              </div>
            </div>
          </div>
          <div className="st-items-display">
            <div className="slider" id="slider">
              {store.map((value) => {
                return (
                  <div key={value.id} className="item">
                    <NavLink
                      to={`/products/${value.id}`}
                      className="trend-link"
                    >
                      <div className="image">
                        <img src={value.image} alt="" />
                      </div>
                      <div className="details">
                        <div className="item-name">
                          <span>{value.category}</span>
                        </div>
                        <div className="store-name">
                          <span>Chicken Factory</span>
                        </div>
                        <div className="price">
                          <span>NGN {value.price}</span>
                        </div>
                        <div className="rating">
                          <span className="stars">⭐⭐⭐⭐⭐</span>
                        </div>
                      </div>
                    </NavLink>
                    <div className="wishlist-icon">
                      <AiOutlineHeart
                        key={value.id}
                        onClick={() => setAddToWishlist(!addToWishlist)}
                        className={`heart-icon ${
                          addToWishlist ? "heart-active" : ""
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="st-review">
          <div className="st-review-head">
            <div className="btn" onClick={() => navigate("#")}>
              <div className="btn-txt">See All</div>
              <div className="arr-icon">
                <BsArrowRightShort />
              </div>
            </div>
          </div>
          <div className="st-review-display">
            <div className="review-img">
              <img
                src="https://images.pexels.com/photos/4177650/pexels-photo-4177650.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="img"
              />
            </div>
            <div className="review-details">
              <div className="r-top">
                <span className="r-name">Jimoh Wisdom</span>
                <div className="r-date">13 Aug 2022</div>
              </div>
              <div className="r-rating">
                <span className="stars">⭐⭐⭐⭐⭐</span>
              </div>
              <div className="r-subject">
                <span>
                  I am very impressed with the qualities, really amazing!
                </span>
              </div>
              <div className="r-comment">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Elementum amet, lacus amet neque. Quam vulputate lectus leo
                  egestas cum. Tincidunt nisi, nascetur risus rhoncus placerat
                  tortor maecenas. Morbi hendrerit nunc donec egestas.
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoreProfile;
