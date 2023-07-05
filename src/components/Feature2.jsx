import "./Feature2.scss";
import { useRef } from "react";
import phoneImg from "../assets/features/2/phone.webp";
import person1 from "../assets/features/2/woman1.webp";
import person2 from "../assets/features/2/woman2.webp";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function Feature2() {
  const img1Ref = useRef();
  const img1InView = useInView(img1Ref);
  const img2Ref = useRef();
  const img2InView = useInView(img2Ref);
  const containerRef = useRef();

  const { scrollYProgress } = useScroll();
  const y2 = useTransform(scrollYProgress, [0, 1], ["200%", "-100%"]);
  const y1 = useTransform(scrollYProgress, [0, 1], ["500%", "-300%"]);

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
    <div className="feature-container2">
      <article>
        <div ref={containerRef}>
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
        <div>
          <h2>
            Relax and Sleep Soundly with Sleepiest's <span>Sleep Sounds</span>
          </h2>
          <p>
            Sleepiest's 80+ soothing sleep sounds are designed to promote
            relaxation and improve your sleep quality. From gentle rain to ocean
            waves and white noise, our soundscapes are carefully crafted to mask
            disruptive noises and create a peaceful sleep environment.
          </p>
          <p>
            Download Sleepiest today and start enjoying a better night's sleep.
          </p>
          <a href="">Try For Free</a>
        </div>
      </article>
    </div>
  );
}
