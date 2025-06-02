import "./services.scss";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <p>
          Hello <br />
          world
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <b>Unique</b> Ideas
          </h1>
        </div>

        <div className="title">
          <h1>
            <b>Unique</b> Ideas
          </h1>
          <button>What we do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            nisi, recusandae, enim explicabo, sunt dignissimos quasi eum
            distinctio quis nam saepe omnis nemo dolorum culpa nesciunt quos sed
            dolor! Ex!
          </p>
          <button>GO</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            nisi, recusandae, enim explicabo, sunt dignissimos quasi eum
            distinctio quis nam saepe omnis nemo dolorum culpa nesciunt quos sed
            dolor! Ex!
          </p>
          <button>GO</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            nisi, recusandae, enim explicabo, sunt dignissimos quasi eum
            distinctio quis nam saepe omnis nemo dolorum culpa nesciunt quos sed
            dolor! Ex!
          </p>
          <button>GO</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
