import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';

function Button({ color, onClick, borderRadius , icon}) {
   
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ color: color, borderRadius: borderRadius }}
      className="text-2xl p-3 hover:drop-shadow-xl dark:hover:bg-main-dark-bg hover:bg-light-gray"
    >
      {icon}
    </button>
  );
}

export default Button;