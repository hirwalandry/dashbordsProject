import React from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

function NavButton({ title, customFunc, color, dotColor, icons }) {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={() => customFunc()}
        style={{ color }}
        className="relative text-xl rounded-full p-3 dark:hover:bg-[#42464D] hover:bg-light-gray "
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icons}
      </button>
    </TooltipComponent>
  );
}

export default NavButton;
