import React from "react";

function Button({ color, bgColor, text, borderRadius }) {
  console.log(color);
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-md p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
}

export default Button;
