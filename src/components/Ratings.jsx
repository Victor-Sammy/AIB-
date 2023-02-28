import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import "../sass/pages/_productDetails.scss";

const Ratings = ({ value, color }) => {
  return (
    <div className='rating'>
      {[1, 2, 3, 4, 5].map((rate) => (
        <span key={uuidv4()}>
          <i
            style={{ color }}
            className={
              value + 1 === rate + 0.5
                ? 'fa-solid fa-star-half-alt'
                : value >= rate
                ? 'fa-solid fa-star'
                : 'far fa-star'
            }
          ></i>
        </span>
      ))}
    </div>
  )
}

Ratings.defaultProps = {
  color: '#ffa41c',
}
export default Ratings
