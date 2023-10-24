import React, { useState } from "react";
import Card from "./components/card/card";
import Header from "./components/header/Header";

function App() {
  const [url, setUrl] = useState(); //storing and changing the value of url
  const handleUrl = (AppUrl) => { //url from header
    setUrl(AppUrl);
  };
  console.log(url);
  return (
    <>
      <Header handleUrl={handleUrl} /> 
      <Card url={url} />
    </>
  );
}

export default App;
