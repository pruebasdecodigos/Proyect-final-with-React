import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CardAnimada({ children, direction = "left", animationType = "float" }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const xOffset = direction === "left" ? -120 : direction === "right" ? 120 : 0;

  const variants = {
    hidden: {
      opacity: 0,
      x: xOffset,
      y: animationType === "float" ? 20 : 0,
      rotate: animationType === "rotate" ? -8 : 0,
      scale: animationType === "scale" ? 0.96 : 1,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition:
        animationType === "float"
          ? { type: "spring", stiffness: 60, damping: 14, duration: 0.8 }
          : animationType === "rotate"
          ? { type: "spring", stiffness: 70, damping: 16, duration: 0.9 }
          : { duration: 0.7, ease: "easeOut" },
    },
  };

  const floatAnimation =
    animationType === "float"
      ? {
          y: [0, -8, 0],
          transition: { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
        }
      : undefined; // en lugar de {} para no animar nada innecesariamente

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ scale: 1.02 }}
      style={{ willChange: "transform, opacity" }}
    >
      <motion.div animate={inView ? floatAnimation : undefined}>
        {children}
      </motion.div>
    </motion.div>
  );
}


/*=============== 
  Terminado :D
===============*/