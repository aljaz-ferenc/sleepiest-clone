import "./ReviewProfiles.scss";
import starImg from "../assets/star.svg";
import man1 from "../assets/man-1.webp";
import man2 from "../assets/man-2.webp";
import woman1 from "../assets/woman-1.webp";
import woman2 from "../assets/woman-2.webp";

export default function ReviewProfiles() {
  return (
    <div className="review-profiles">
      <div className="profiles">
        <img src={man1} alt="" />
        <img src={woman1} alt="" />
        <img src={man2} alt="" />
        <img src={woman2} alt="" />
      </div>
      <div>
        <div className="stars">
          <img src={starImg} alt="" />
          <img src={starImg} alt="" />
          <img src={starImg} alt="" />
          <img src={starImg} alt="" />
          <img src={starImg} alt="" />
          <span>4.6</span>
        </div>
        <div>
          <span>With Over</span> <strong>44.7k</strong> <span>Reviews</span>
        </div>
      </div>
    </div>
  );
}
