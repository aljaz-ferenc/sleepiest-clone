import "./Rewards.scss";
import rewardLeft from "../assets/award-left.svg";
import rewardRight from "../assets/award-right.svg";
import starImg from "../assets/star.svg";
import man1 from "../assets/man-1.webp";
import man2 from "../assets/man-2.webp";
import woman1 from "../assets/woman-1.webp";
import woman2 from "../assets/woman-2.webp";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import getVariants from "../animations";
import ReviewProfiles from "./ReviewProfiles";

export default function Rewards() {
  const rewardLeafRef = useRef();
  const rewardLeafInView = useInView(rewardLeafRef);

  return (
    <div className="rewards-container">
      <div className="rewards">
        <div className="rewards__top" ref={rewardLeafRef}>
          <div className="rewards__top--left">
            <div className="reward">
              <motion.img
                initial={getVariants("heroRewardText").initial}
                animate={
                  rewardLeafInView
                    ? getVariants("heroRewardText").animate
                    : getVariants("heroRewardText").initial
                }
                src={rewardLeft}
                className="reward__left"
              ></motion.img>
              <div className="reward__center">
                <motion.div
                  initial={getVariants("heroRewardText").initial}
                  animate={
                    rewardLeafInView
                      ? getVariants("heroRewardText").animate
                      : getVariants("heroRewardText").initial
                  }
                >
                  App Of The Day
                </motion.div>
              </div>
              <motion.img
                initial={getVariants("heroRewardLeafR").initial}
                animate={
                  rewardLeafInView
                    ? getVariants("heroRewardLeafR").animate
                    : getVariants("heroRewardLeafR").initial
                }
                src={rewardRight}
                className="reward__right"
              ></motion.img>
            </div>
          </div>
          <ReviewProfiles />
          <div className="rewards__top--right">
            <div className="reward">
              <motion.img
                initial={getVariants("heroRewardLeafL").initial}
                animate={
                  rewardLeafInView
                    ? getVariants("heroRewardLeafL").animate
                    : getVariants("heroRewardLeafL").initial
                }
                src={rewardLeft}
                className="reward__left"
              />
              <div className="reward__center">
                <motion.div
                  initial={getVariants("heroRewardText").initial}
                  animate={
                    rewardLeafInView
                      ? getVariants("heroRewardText").animate
                      : getVariants("heroRewardText").initial
                  }
                >
                  5 Million+ <br /> Downloads
                </motion.div>
              </div>
              <motion.img
                initial={getVariants("heroRewardLeafR").initial}
                animate={
                  rewardLeafInView
                    ? getVariants("heroRewardLeafR").animate
                    : getVariants("heroRewardLeafR").initial
                }
                src={rewardRight}
                className="reward__right"
              ></motion.img>
            </div>
          </div>
        </div>
      </div>
      <div className="rewards__bottom">
        <h2>
          Over 1050+ sleep sounds, <br /> stories & meditations to <br /> help
          you <span>sleep better</span>
        </h2>
      </div>
    </div>
  );
}
