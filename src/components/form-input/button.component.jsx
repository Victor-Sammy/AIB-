import React from "react";

import '../../sass/components/button.style.scss';
import Arrow from '../../assets/arrow-right.png';

const CustomButton = ({children, ...otherProps}) => (
    <button className="button" {...otherProps}>
        {children}
        <div className="arrow">
            <img  src={Arrow} alt='icon'/>
        </div>
        
    </button>
);

export default CustomButton;