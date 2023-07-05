import PopularCard from "./PopularCard";
import "./PopularPodcasts.scss";
import podcasts from "../data/popular-podcasts.json";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function PopularPodcasts() {
  const popularRef = useRef();
  const inView = useInView(popularRef);

  const cardContainerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        type: "spring",
      },
    },
  };

  return (
    <div ref={popularRef} className="popular-podcasts">
      <h2 className="popular-podcasts__heading">
        Listen To Our Award <br /> Winning Sleep Podcasts
      </h2>
      <p className="popular-podcasts__text">
        Shows from our best voice actors for adults and kids, available directly
        in the Sleepiest app.
      </p>
      <motion.div
        variants={cardContainerVariants}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="popular-podcasts__cards"
      >
        {podcasts.map((pod, i) => (
          <PopularCard key={i} id={i} image={i} podcast={pod} />
        ))}
      </motion.div>
    </div>
  );
}
