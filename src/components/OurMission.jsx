import Award from "./Award";
import "./OurMission.scss";
import phoneImg from "../assets/phone-bottom.webp";
import ReviewProfiles from "./ReviewProfiles";

export default function OurMission() {
  return (
    <div className="our-mission-container">
      <div className="our-mission">
        <h2>
          Join Us in Our Mission <br /> to Help the World{" "}
          <span>Sleep Better</span>
        </h2>
        <p>
          At Sleepiest, we believe that a good night's sleep is essential for
          overall health and well-being. That's why we're on a mission to help
          get the world sleeping better, one person at a time. We understand the
          frustration and stress that come with poor sleep, and we're here to
          help.
        </p>
        <p>
          Join us in our mission to help the world sleep better. Try Sleepiest
          for free today and start your journey to better sleep.
        </p>
        <a href="">Try For Free</a>
        <div className="our-mission__flex">
          <Award content={"App Of The Day"} />
          <img className="phone-img" src={phoneImg} alt="" />
          <Award content={"5 Million+ Downloads"} />
        </div>
        <ReviewProfiles />
      </div>
    </div>
  );
}
