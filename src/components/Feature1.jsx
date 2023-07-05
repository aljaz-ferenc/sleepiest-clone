import { useEffect, useRef } from "react";
import phoneImg from "../assets/features/1/phone.webp";
import person1 from "../assets/features/1/woman1.webp";
import person2 from "../assets/features/1/woman2.webp";
import "./Feature1.scss";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function Feature1() {
  const img1Ref = useRef();
  const img1InView = useInView(img1Ref);
  const img2Ref = useRef();
  const img2InView = useInView(img2Ref);

  const { scrollYProgress } = useScroll();
  const y2 = useTransform(scrollYProgress, [0, 1], ["200%", "0%"]);
  const y1 = useTransform(scrollYProgress, [0, 1], ["600%", "0%"]);

  const img1Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };
  const img2Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };

  return (
    <div className="feature-container">
      <article>
        <div>
          <h2>
            Soothing <span>Bedtime Stories</span> for Better Sleep
          </h2>
          <p>
            Enjoy our collection of over 360+ calming bedtime stories to help
            you relax and get a better night's sleep. Choose from a variety of
            genres, including classic fairytales and guided meditations, to find
            the perfect story for you.
          </p>
          <p>
            Download Sleepiest today and experience the power of soothing
            bedtime stories for better sleep.
          </p>
          <a href="">Try For Free</a>
        </div>
        <div>
          <img className="phone-img" src={phoneImg} alt="" />
          <motion.div
            style={{ y: y1 }}
            variants={img1Variants}
            initial="initial"
            animate={img1InView ? "animate" : "initial"}
            ref={img1Ref}
          >
            <img className="person1-img" src={person1} alt="" />
          </motion.div>
          <motion.div
            style={{ y: y2 }}
            variants={img2Variants}
            initial="initial"
            animate={img1InView ? "animate" : "initial"}
            ref={img2Ref}
          >
            <img className="person2-img" src={person2} alt="" />
          </motion.div>

        </div>
      </article>
    </div>
  );
}
