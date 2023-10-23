import { useState, useEffect } from "react";
const url = (category) => {
  return `https://newsapi.org/v2/top-headlines?category=${category}&language=en&apiKey=b639e600f420400abac4efbb0720f333`;
};
const FrontUrl =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=b639e600f420400abac4efbb0720f333";

const Header = ({ handleUrl }) => {
  const [category, setCategory] = useState("");
  const [catUrl, setCatUrl] = useState(FrontUrl);

  const handler = (event) => {
    setCategory(event.target.name);
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
    handleUrl(catUrl);
  }, [catUrl]);
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
              <button name="sports" onClick={handler}>
                {" "}
                Sports{" "}
              </button>
            </li>
            <li>
              <button name="entertainment" onClick={handler}>
                {" "}
                Entertainment{" "}
              </button>
            </li>
            <li>
              <button name="technology" onClick={handler}>
                {" "}
                Technology{" "}
              </button>
            </li>
            <li>
              <button name="science" onClick={handler}>
                {" "}
                Science{" "}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
