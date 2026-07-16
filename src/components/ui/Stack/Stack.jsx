import { motion, useMotionValue, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import "./Stack.css";

import Profile1 from "../../../assets/images/Profile1.jpeg";
import Profile2 from "../../../assets/images/Profile2.jpeg";
import Profile3 from "../../../assets/images/Profile3.jpeg";

const images = [Profile1, Profile2, Profile3];

function CardRotate({ children, onSendToBack, sensitivity }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  function handleDragEnd(_, info) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="card-rotate"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragElastic={0.6}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

export default function Stack() {
  const [stack, setStack] = useState(
    images.map((image, index) => ({
      id: index,
      image,
    }))
  );

  const sendToBack = (id) => {
    setStack((prev) => {
      const cards = [...prev];
      const index = cards.findIndex((card) => card.id === id);

      const [card] = cards.splice(index, 1);

      cards.unshift(card);

      return cards;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setStack((prev) => {
        const cards = [...prev];
        const last = cards.pop();
        cards.unshift(last);
        return cards;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="stack-container">
      {stack.map((card, index) => (
        <CardRotate
          key={card.id}
          sensitivity={180}
          onSendToBack={() => sendToBack(card.id)}
        >
          <motion.div
            className="card"
            animate={{
              rotateZ: (stack.length - index - 1) * 5,
              scale: 1 + index * 0.05 - stack.length * 0.05,
              x: index * -25,
              y: index * 8,
            }}
            transition={{
                type: "spring",
                stiffness: 90,
                damping: 18,
            }}
          >
            <img
              src={card.image}
              className="card-image"
              alt=""
            />
          </motion.div>
        </CardRotate>
      ))}
    </div>
  );
}