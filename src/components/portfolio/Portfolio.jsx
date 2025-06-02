import React from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Portfolio Item 1",
    img: "https://static.desygner.com/wp-content/uploads/sites/13/2022/05/04141642/Free-Stock-Photos-01-2048x1366.jpg",
    desc: "This is a description for portfolio item 1.",
  },

  {
    id: 2,
    title: "Portfolio Item 2",
    img: "https://static.desygner.com/wp-content/uploads/sites/13/2022/05/04141642/Free-Stock-Photos-01-2048x1366.jpg",
    desc: "This is a description for portfolio item 1.",
  },

  {
    id: 3,
    title: "Portfolio Item 3",
    img: "https://static.desygner.com/wp-content/uploads/sites/13/2022/05/04141642/Free-Stock-Photos-01-2048x1366.jpg",
    desc: "This is a description for portfolio item 1.",
  },
];

const Single = ({ item }) => {
  return <section>{item.title}</section>;
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Fetured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
