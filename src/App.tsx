import "./App.css";
import React from "react";
import { Layout } from "./modules/index";

function App() {
  return (
    <div
      className={"bg-white min-h-screen flex justify-center items-center p-10"}
    >
      <div className={"flex flex-col justify-center items-center"}>
        <div className={"text-center mb-[50px] max-w-[779px]"}>
          <h1 className={"font-bold text-6xl text-primary-content mb-6"}>
            Easy Turn-key Integration
          </h1>
          <p className={"text-lg text-secondary-content"}>
            Increase job satisfaction, improve engagement, decrease burnout and
            lower payroll liability by reimagining what employees can do with
            their PTO.
          </p>
        </div>
        <Layout />
      </div>
    </div>
  );
}

export default App;
