import "./Hero.scss";
import phoneImg from "../assets/phone.webp";
import backgroundImg from "../assets/background.webp";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import getVariants from "../animations";

export default function Hero() {
  const headingRef = useRef();
  const textRef = useRef();
  const phoneRef = useRef();
  const tryBtn = useRef();
  const learnBtn = useRef();
  const headingInView = useInView(headingRef);
  const textInView = useInView(textRef);
  const phoneInView = useInView(phoneRef);
  const tryBtnInView = useInView(tryBtn);
  const learnBtnInView = useInView(learnBtn);

  return (
    <div className="hero-container">
      <img
        className="hero-container__bg"
        src={backgroundImg}
        style={{ zIndex: 1 }}
        alt=""
      />
      <div className="hero">
        <div className="hero__left">
          <motion.h1
            ref={headingRef}
            initial={getVariants("heroHeading").initial}
            animate={
              headingInView
                ? getVariants("heroHeading").animate
                : getVariants("heroHeading").initial
            }
            className="hero__left--heading"
          >
            Here to help you sleep <br /> better tonight
          </motion.h1>
          <motion.p
            ref={textRef}
            initial={getVariants("heroText").initial}
            animate={
              textInView
                ? getVariants("heroText").animate
                : getVariants("heroText").initial
            }
            className="hero__left--desc"
          >
            Get the restful night of sleep you deserve, with Sleepiest’s
            award-winning bedtime stories, sleep sounds, meditations and sleep
            tracking.
          </motion.p>
          <div className="hero__left--btns">
            <motion.a
              ref={tryBtn}
              initial={getVariants("heroTryBtn").initial}
              animate={
                tryBtnInView
                  ? getVariants("heroTryBtn").animate
                  : getVariants("heroTryBtn").initial
              }
              className="btn-try"
            >
              Try For Free
            </motion.a>
            <motion.a
              ref={learnBtn}
              initial={getVariants("heroLearnBtn").initial}
              animate={
                learnBtnInView
                  ? getVariants("heroLearnBtn").animate
                  : getVariants("heroLearnBtn").initial
              }
              href=""
              className="btn-learn"
            >
              Learn more&#8594;
            </motion.a>
          </div>
        </div>
        <div className="hero__right">
          <motion.img
            src={phoneImg}
            alt=""
            ref={phoneRef}
            initial={getVariants("heroPhone").initial}
            animate={
              phoneInView
                ? getVariants("heroPhone").animate
                : getVariants("heroPhone").initial
            }
          />
        </div>
      </div>
    </div>
  );
}
