import { Heading } from "./modules/Heading/Heading";
import { Layout } from "./modules/Layout/Layout";

const RemoteComponent = () => (
  <div className={"flex flex-col justify-center items-center w-full"}>
    <Heading />
    <Layout />
  </div>
);

export default RemoteComponent;
