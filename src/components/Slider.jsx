import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import './Slider.scss';

export default function Slider() {
  const topRow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const bottomRow = [...topRow];

  const { scrollY} = useScroll()
  const y1 = useSpring(useTransform(scrollY, [0, window.innerHeight], [0, 32]))
  const y2 = useSpring(useTransform(scrollY, [0, window.innerHeight], [1, -32]))

  return (
    <div className="slider">
      <motion.div style={{ x: y1 }} className="slider__top">
        {topRow.map((img) => (
          <img key={img} src={`../slider/top/${img}.webp`} alt={`Top Image ${img}`} />
        ))}
      </motion.div>
      <motion.div style={{ x: y2 }} className="slider__bottom">
        {bottomRow.map((img) => (
          <img key={img} src={`../slider/bottom/${img}.webp`} alt={`Bottom Image ${img}`} />
        ))}
      </motion.div>
    </div>
  );
}
