import React from "react";

import '../../sass/components/form-input.style.scss';

const FormInput = ({ handleChange, label, icon, error, ...otherProps}) => (
    <div className="form">
        <input className="form-input" onChange={handleChange} {...otherProps} placeholder={label} />
        <img src={icon} className="form-icon" alt="icon"/>
        <div className="error">{error}</div>
    </div>
);

export default FormInput