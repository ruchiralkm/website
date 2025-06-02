import { motion } from "framer-motion";

const Text = () => {
  return (
    <div className="co">
      <motion.div
        className="box"
        animate={{ opacity: 0 }}
        transition={{ duration: 2 }}
      ></motion.div>
    </div>
  );
};

export default Text;
