import React from "react";
import "../../sass/components/successfullsignup.style.scss";

export default function SuccessfullSignUp() {
  return (
    <div className="successfullSignUp">
      <h2>Successfull Account Creation</h2>
      <span>
        Your account has created successfully. <br />
        Verify your account by clicking the link sent to your email.
      </span>
    </div>
  );
}
