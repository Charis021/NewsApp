import { useState, useEffect } from "react";
import "./header.scss";
const url = (cate) => {
  return `https://newsapi.org/v2/top-headlines?category=${cate}&language=en&apiKey=b639e600f420400abac4efbb0720f333`;
};
const FrontUrl =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=b639e600f420400abac4efbb0720f333";

const Header = (props) => {
  //
  const { handleUrl } = props;
  const [category, setCategory] = useState(""); //onclick business
  const [catUrl, setCatUrl] = useState(FrontUrl);

  const handler = (event) => {
    setCategory(event.target.name);
  };

  ////////
  useEffect(() => {
    if (category) {
      const newUrl = url(category); //url function invoked
      setCatUrl(newUrl);
    }
  }, [category]);
  ////////
  useEffect(() => {
    handleUrl(catUrl);
  }, [catUrl]);
  return (
    <div>
      <div className="heading-div">
        <h1>
          <a href="/">NEWS APP</a>
        </h1>
      </div>
      <div className="nav-div">
        <nav>
          <ul>
            <li>
              <button>
                {" "}
                <a href="/">Home</a>
              </button>
            </li>
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
