import { useState, useEffect } from "react";
import Data from "../Data";
const url = (category) => {
  return `https://newsapi.org/v2/top-headlines?category=${category}&language=en&apiKey=b639e600f420400abac4efbb0720f333`;
};
const FrontUrl =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=b639e600f420400abac4efbb0720f333";

const Header = () => {
  const [category, setCategory] = useState("");
  const [catUrl, setCatUrl] = useState(FrontUrl);
  const fetch = () => {
    Data(catUrl);
  };
  ////////
  useEffect(() => {
    if (category) {
      const newUrl = url(category);
      setCatUrl(newUrl);
    }
  }, [category]);
  ////////
  useEffect(() => {
    fetch();
    console.log(catUrl);
  }, [catUrl]);

  const handler = (event) => {
    setCategory(event.target.name);
  };
  return (
    <div>
      <div>
        <h1>NEWS APP</h1>
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <button name="business" onClick={handler}>
                {" "}
                Business{" "}
              </button>
            </li>
            <li>
              <button name="cricket" onClick={handler}>
                {" "}
                Cricket{" "}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
