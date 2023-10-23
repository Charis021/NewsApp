import React, { useState } from "react";
import Card from "./components/card/card";
import Header from "./components/header/Header";

function App() {
  const [url, setUrl] = useState();
  const handleUrl = (url) => {
    setUrl(url);
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
