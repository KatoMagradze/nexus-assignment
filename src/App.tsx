import "./App.css";
import React from "react";
import { Layout, Heading } from "./modules/index";

function App() {
  return (
    <div
      className={
        "bg-white min-h-screen flex justify-center items-center p-0 xs:p-10"
      }
    >
      <div className={"flex flex-col justify-center items-center w-full"}>
        <Heading />
        <Layout />
      </div>
    </div>
  );
}

export default App;
