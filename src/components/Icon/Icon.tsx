import React from "react";

interface IIcon {
  className: string;
}

export const Icon: React.FC<IIcon> = ({ className }) => {
  return <div className={`w-12 h-12 rounded-xl ${className || ""}`} />;
};
