import React from "react";

interface ISwitch {
  active?: boolean;
  onClick?: (isActive: boolean) => void;
}

export const Switch: React.FC<ISwitch> = ({ active = false, onClick }) => {
  const handleClick = () => {
    onClick?.(!active);
  };

  return (
    <div
      className={`w-[22px] h-3.5 rounded-3xl relative cursor-pointer p-0.5 ${
        active ? "bg-primary p-1" : "border-2 border-darkgrey p-0.5"
      }`}
      onClick={handleClick}
    >
      <div
        className={`rounded-full absolute w-1.5 h-1.5 ${
          active ? "bg-white right-[3px]" : "bg-darkgrey left-px"
        }`}
      />
    </div>
  );
};
