import { Outlet } from "react-router-dom";
import Header from "../componet/Header";

function RootPage() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}

export default RootPage;
