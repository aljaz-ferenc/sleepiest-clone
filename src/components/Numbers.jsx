import { invariant, useInView } from "framer-motion";
import "./Numbers.scss";
import { useEffect, useRef, useState } from "react";

export default function Numbers() {
  const [downloads, setDownloads] = useState(0);
  const [sleep, setSleep] = useState(0);
  const [listens, setListens] = useState(0);
  const [nights, setNights] = useState(0);

  const numsRef = useRef();
  const inView = useInView(numsRef);
  const countDuration = 1200;

  const countUp = (start, end, time, setState) => {
    setState(start);
    const timer = setInterval(() => {
      setState((prev) => {
        const newCount = prev + (end / time) * 10;
        if (newCount > end) {
          clearInterval(timer);
          return end;
        }
        return newCount;
      });
    }, 10);
  };

  useEffect(() => {
    if (!inView) {
      countUp(0, 5321735, countDuration, setDownloads);
      countUp(0, 19, countDuration, setSleep);
      countUp(0, 2334132, countDuration, setListens);
      countUp(0, 6437802, countDuration, setNights);
    } else {
      setDownloads(0);
      setSleep(0);
      setListens(0);
      setNights(0);
    }
  }, [inView]);

  return (
    <div className="numbers-container">
      <div className="numbers">
        <h2>
          Sleepiest in <span>Numbers</span>
        </h2>
        <p>
          With millions of users across the globe, Sleepiest is the go-to app
          for anyone looking to improve their sleep.
        </p>
        <div ref={numsRef} className="numbers__grid">
          <div>
            <h2>{Math.floor(downloads).toLocaleString()}</h2>
            <p>Total Downloads Of Sleepiest</p>
          </div>
          <div>
            <h2>{Math.floor(sleep)} minutes</h2>
            <p>
              Average Increased Daily Sleep Opportunity After Installing
              Sleepiest Versus The Week Before
            </p>
          </div>
          <div>
            <h2>{Math.floor(listens).toLocaleString()}</h2>
            <p>Content Listens In The Last 30 Days</p>
          </div>
          <div>
            <h2>{Math.floor(nights).toLocaleString()}</h2>
            <p>Total Nights Of Sleep Tracked</p>
          </div>
        </div>
      </div>
    </div>
  );
}
