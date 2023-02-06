import React from "react";

import "./dropdown.scss";
import Drop from "../../../assets/drop.png";
import { useEffect, useState } from "react";

const Dropdown = ({ placeHolder, options, handleChange, onSubmit }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(false);

  useEffect(() => {
    const handler = () => setShowMenu(false);
    onSub();
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });
  const handleInputClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue.label;
    }
    return placeHolder;
  };

  const onSub = () => {
    if (onSubmit) {
      setSelectedValue(false);
    }
  };

  const onItemClick = (option) => {
    setSelectedValue(option);
  };

  const isSelected = (option) => {
    if (!selectedValue) {
      return false;
    }

    return selectedValue.value === option.value;
  };

  return (
    <div className="dropdown-container">
      <div onClick={handleInputClick} className="dropdown-input">
        <div className="dropdown-selected-value">{getDisplay()}</div>
        <div className="dropdown-tools">
          <div className="dropdown-tool">
            <img src={Drop} alt="." />
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="dropdown-menu">
          {options.map((option) => (
            <div
              onClick={() => {
                onItemClick(option);
                handleChange(option.label);
              }}
              key={option.value}
              className={`dropdown-item ${
                isSelected(option) && "dropdown-item"
              } `}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
