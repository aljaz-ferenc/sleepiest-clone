import "./ReviewCard.scss";
import starImg from "../assets/star.svg";
import starImgGray from "../assets/starGray.svg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ReviewCard({ review, id }) {
  const reviewRef = useRef();
  const inView = useInView(reviewRef);
  const starCount = new Array(+review.rating);
  const grayStarCount = new Array(5 - +review.rating);
  starCount.fill("_");
  grayStarCount.fill("_");

  const variants = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
      },
    },
  };

  return (
    <motion.div
      ref={reviewRef}
      variants={variants}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      className="review-card"
    >
      <div className="review-card__stars">
        {starCount.map((star, i) => (
          <img src={starImg} key={i} />
        ))}
        {grayStarCount.map((star, i) => (
          <img src={starImgGray} key={i} />
        ))}
      </div>
      <h3 className="review-card__title">{review.title}</h3>
      <p className="review-card__review">"{review.review}"</p>
      <span className="review-card__foot">
        {review.country} - {review.date}
      </span>
    </motion.div>
  );
}
