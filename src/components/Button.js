import React from "react";
import minus from "../components/img/minus.png";
import plus from "../components/img/plus.png";

function Button({ value, funcCount }) {
  return (
    <div className="container">
      <div className="calc">
        <button
          className="decrementation"
          onClick={() => {
            funcCount(value - 1);
          }}
        >
          <div className="clicImageMinus">
            <img src={minus} alt="moins"></img>
          </div>
        </button>

        <div className="counter">{value}</div>

        <button
          className="incrementation"
          onClick={() => {
            funcCount(value + 1);
          }}
        >
          <div className="clicImagePlus">
            <img src={plus} alt="plus"></img>
          </div>
        </button>
      </div>
      <button
        className="reset"
        onClick={() => {
          funcCount((value = 0));
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Button;
