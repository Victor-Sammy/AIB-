import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./reset.scss";

const ResetSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="reset-success-page">
      <div className="back-arrow" onClick={() => navigate(-1)}>
        <BsArrowLeft />
      </div>
      <div className="r-success-container">
        <div className="success-head">
          <span>Your Password Has Been Updated Successfully!</span>
        </div>
      </div>
    </div>
  );
};

export default ResetSuccess;
