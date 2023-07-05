import "./Award.scss";
import rewardLeft from "../assets/award-left.svg";
import rewardRight from "../assets/award-right.svg";
import getVariants from "../animations";
import "./Rewards.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Award({content}) {
  const rewardLeafRef = useRef();
  const rewardLeafInView = useInView(rewardLeafRef);

  return (
    <div className="award" ref={rewardLeafRef}>
      <div>
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
      </div>
      <div className="reward__center">
        <motion.div
          initial={getVariants("heroRewardText").initial}
          animate={
            rewardLeafInView
              ? getVariants("heroRewardText").animate
              : getVariants("heroRewardText").initial
          }
        >
          {content}
        </motion.div>
      </div>
      <div>
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
  );
}
