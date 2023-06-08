import React from "react";

export const Heading = () => {
  return (
    <div
      className={
        "text-center mb-[33px] max-w-[500px] lg:mb-[50px] lg:max-w-[779px] px-4 xs:px-0"
      }
    >
      <h1
        className={"font-bold text-4xl text-primary-content mb-6 lg:text-6xl"}
      >
        Easy Turn-key Integration
      </h1>
      <p className={"text-base text-secondary-content lg:text-lg"}>
        Increase job satisfaction, improve engagement, decrease burnout and
        lower payroll liability by reimagining what employees can do with their
        PTO.
      </p>
    </div>
  );
};
