import React from "react";

interface IConnection {
  activeItems: number[];
  className?: string;
  isLeft?: boolean;
}

export const Connection: React.FC<IConnection> = ({
  className,
  activeItems,
  isLeft,
}) => {
  const active = {
    first: isLeft ? activeItems.includes(1) : activeItems.includes(4),
    second: isLeft ? activeItems.includes(2) : activeItems.includes(5),
    third: isLeft ? activeItems.includes(3) : activeItems.includes(6),
  };

  return (
    <div className={className || ""}>
      <div className={"mb-[-2px]"}>
        <div
          className={`h-[50px] w-[60px] border-2 border-l-0 border-b-0 rounded-tr-3xl relative ${
            active.first
              ? "border-t-primary border-r-primary z-10"
              : "border-t-connection border-r-connection z-0"
          }`}
        />
        <div
          className={`h-[50px] w-[60px] border-2 border-t-0 border-r-0 rounded-bl-3xl ml-[58px] relative ${
            active.first
              ? "border-l-primary border-b-primary z-10"
              : "border-l-connection border-b-connection z-0"
          }`}
        />
      </div>
      <div
        className={`h-[2px] w-[118px] relative ${
          active.second ? "bg-primary z-10" : "bg-connection z-0"
        }`}
      />
      <div className={"mt-[-2px]"}>
        <div
          className={`h-[50px] w-[60px] border-2 border-r-0  border-b-0 rounded-tl-3xl ml-[58px] relative ${
            active.third
              ? "border-t-primary border-l-primary z-10"
              : "border-t-connection border-l-connection z-0"
          }`}
        />
        <div
          className={`h-[50px] w-[60px] border-2 border-t-0  border-l-0  rounded-br-3xl relative ${
            active.third
              ? "border-r-primary border-b-primary z-10"
              : "border-r-connection border-b-connection z-0"
          }`}
        />
      </div>
    </div>
  );
};
