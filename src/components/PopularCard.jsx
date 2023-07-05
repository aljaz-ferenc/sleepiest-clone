import "./PopularCard.scss";
import { motion } from "framer-motion";

export default function PopularCard({ podcast, image }) {
  const cardVariants = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        type: "spring",
      },
    },
  };

  return (
    <motion.article variants={cardVariants} className="popular-card">
      <motion.img
        variants={cardVariants}
        src={`../popular/${image}.webp`}
        alt=""
      />
      <motion.h3 variants={cardVariants}>{podcast.title}</motion.h3>
      <motion.p variants={cardVariants}>{podcast.description}</motion.p>
      <motion.span variants={cardVariants}>
        ({podcast.episodesAvailable} Episodes Available)
      </motion.span>
    </motion.article>
  );
}
