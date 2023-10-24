import React from "react";
import Data from "../Data";
import "./card.scss";

const Card = ({ url }) => {
  //props destructured
  const { product } = Data(url); //function invoked
  const { articles } = product;
  return (
    <div className="main-div">
      {articles?.map((one, index) => {
        const { publishedAt, description, urlToImage, title, url } = one;
        return (
          <div key={index} className="card">
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href={url}>
                <button className="btn">Read More</button>
              </a>
              <h5>
                <span>Published at : </span>
                {publishedAt}
              </h5>
            </div>
            <img src={urlToImage} alt="img not available" />
          </div>
        );
      })}
    </div>
  );
};

export default Card;
