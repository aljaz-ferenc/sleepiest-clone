import "./Feature5.scss";
import phone1 from "../assets/features/5/phone1.webp";
import phone2 from "../assets/features/5/phone2.webp";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Feature5() {

  const {scrollYProgress} = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], ["70%", "-150%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["180%", "-160%"])
  const img1Ref = useRef()
  const img1InView = useInView(img1Ref, { triggerOnce: true, rootMargin: '-100px 0px -200px 0px' });
  
  const variants1 = {
    initial: {
      opacity: 0,
      y: y1,
      scale: .8,
      rotate: '0deg',
      transformOrigin: 'center'
    },
    animate: {
      opacity: 1,
      y:y1,
      scale: 1,
      rotate: '5deg',
      transformOrigin: 'center',
      display: 'inline',
      transition: {
        delay: 0
      }
    },
  };
  
  const variants2 = {
    initial:{...variants1.initial},
    animate: {...variants1.animate, rotate: '-4deg', y: y2,  transition: {delay: 0.2}}
  }


  return (
    <div className="feature-container5">
      <article>
        <div>
          <h2>
            Track Your Sleep Easily with <span>Automatic Sleep Tracking</span>
          </h2>
          <p>
            Sleepiest's sleep tracking feature allows you to effortlessly track
            your sleep each night without having to manually start tracking each
            night. Once enabled, our technology uses your phone's motion data to
            monitor your sleep and provide you with detailed insights into your
            sleep quality.
          </p>
          <p>
            With Sleepiest's automatic sleep tracking, you can easily identify
            patterns and trends in your sleep habits, such as how long you sleep
            and how often you wake up during the night. Our user-friendly
            interface provides you with easy-to-understand sleep data that can
            help you make adjustments to your sleep routine and improve your
            overall sleep quality.
          </p>
          <a href="">Try For Free</a>
        </div>
        <div>
          <div>
            {/* <motion.img className="phone2" style={{y: y1,  x:-200}} src={phone2} alt="" />
            <motion.img className="phone1" style={{y: y2, x:-100}} src={phone1} alt="" /> */}
            <motion.img
            variants={variants2}
            animate={img1InView ? 'animate': 'initial'}
            style={{y:y1, x:-200}}
            className="phone2"  src={phone2} alt="" 
            />
            <motion.img
            animate={img1InView ? 'animate': 'initial'}
            variants={variants1}
            ref={img1Ref}
            style={{y:y2, x:-100}}
            className="phone1" src={phone1} alt="" />
          </div>
        </div>
      </article>
    </div>
  );
}
