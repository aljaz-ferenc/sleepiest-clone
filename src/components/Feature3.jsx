import './Feature3.scss'
import { useRef } from "react";
import phoneImg from "../assets/features/3/phone.webp";
import person1 from "../assets/features/3/woman1.webp";
import person2 from "../assets/features/3/woman2.webp";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function Feature3() {
  const img1Ref = useRef();
  const img1InView = useInView(img1Ref);
  const img2Ref = useRef();

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
    <div className="feature-container3">
      <article>
      <div>
          <h2>
            <span>Sleep Meditations</span> for Deeper Relaxation
          </h2>
          <p>
          Sleepiest's 200+ sleep meditations can help you achieve a deeper state of relaxation for a better night's sleep. Our guided meditations cover a range of topics, including mindfulness, gratitude, and body relaxation, all designed to quiet your mind and promote relaxation.
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
