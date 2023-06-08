import React from "react";

interface IPersonCard {
  name: string;
  specialization: string;
  description: string;
  image: any;
}

export const PersonCard: React.FC<IPersonCard> = ({
  name,
  description,
  specialization,
  image,
}) => {
  return (
    <div
      className={
        "text-center max-w-[380px] w-full p-6 bg-primary-light border-2 border-primary rounded-3xl flex flex-col justify-center items-center lg:p-10 lg:h-[268px]"
      }
    >
      <img
        src={image}
        alt={""}
        className={
          "w-[86px] h-[86px] rounded-[10px] object-cover mt-[-70px] lg:mt-[-85px]"
        }
      />
      <div className={"font-bold text-primary-content text-lg mb-1.5 mt-3.5"}>
        {name}
      </div>
      <div className={"font-normal text-secondary-content text-sm mb-5"}>
        {specialization}
      </div>
      <div className={"font-normal text-primary-content text-base"}>
        {description}
      </div>
    </div>
  );
};
