import React from "react";
import { useEffect } from "react";
import { forwardRef } from "react";

export default forwardRef(function OptionSelector(
  { options, selectOption },
  ref
) {
  useEffect(() => {
    
  }, []);

  return (
    <div className="productDetails_options">
      {options.map((option, index) => (
        <div className="variant">
          <p className="variant_title">{option.name}</p>
          <form
            className="variant_options"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {option.options.map((value) => (
              <label className="variant_option">
                <input
                  type="radio"
                  name={option.name}
                  value={value.additionalPrice}
                  checked={ref.current[index].option.value === value.value}
                  onChange={(e) => {
                    selectOption(index, value);
                  }}
                />
                <span>{value.value}</span>
              </label>
            ))}
          </form>
        </div>
      ))}
    </div>
  );
});
