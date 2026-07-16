import { motion } from "motion/react";
import "./FloatingBadge.scss";

function FloatingBadge({
  text,
  className,
  color,
  delay = 0,
}) {
  return (
    <motion.div
      className={`floating-badge ${className}`}
      style={{
        "--badge-color": color,
      }}
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: {
          duration: .8,
          delay,
        },
        y: {
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay,
        },
      }}
    >
      <span className="floating-badge__text">
        {text}
      </span>
    </motion.div>
  );
}

export default FloatingBadge;