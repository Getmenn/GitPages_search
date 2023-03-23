import { useState } from "react";
import { Body } from "./components/body/Body";
import { Header } from "./components/header/Header";

const App = () => {

  const [loader, setLoader] = useState('empty')
 
  return (
    <>
      <Header setLoader={setLoader} />
      <Body loader={loader} setLoader={setLoader} />
    </>
  );
}

export {App};
