import React from "react";
import { BASE_API_URL } from "../../utils/base-api-url";

const SingleComment = ({ review }) => {
  const totalRating = review?.rating;
  const imgAvartarSrc = `${BASE_API_URL}${review?.img.data?.attributes.url}`;
  return (
    <div className="comment">
      <div className="thumbnail">
        <img src={imgAvartarSrc} alt="Comment Images" />
      </div>
      <div className="comment-content">
        <div className="rating">
          {Array.from({ length: totalRating }).map((item, i) => (
            <i key={i} className="icon-23"></i>
          ))}
        </div>
        <h5 className="title">{review?.name}</h5>
        <span className="date">{review?.date}</span>
        <p>{review?.desc}</p>
      </div>
    </div>
  );
};

export default SingleComment;
