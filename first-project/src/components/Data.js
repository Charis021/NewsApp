import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Data = (url) => {
  const [product, setProduct] = useState([]);
  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const { articles, totalResults } = await res.json();
      setProduct({ articles, totalResults });
    } catch {
      console.log("there was an error");
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return { product };
};

export default Data;
