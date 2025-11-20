import React from "react";
import { motion } from "framer-motion";
import CloudFrameImage from "../../../assets/CloudFrameImage.png";
import "../../../styles/landingContent/CloudFrame.css";

export default function CloudFrame({ src, alt = "", direction = "left" }) {
  const flyIn = {
    initial: { opacity: 0, x: direction === "left" ? -180 : 180, scale: 0.85 },
    animate: { opacity: 1, x: 0, scale: 1.05 },
    transition: { type: "spring", stiffness: 70, damping: 12, duration: 1.2 },
    whileHover: { scale: 1.05, rotate: direction === "left" ? -2 : 2 },
  };

  return (
    <motion.div
      className="cloud-frame-container"
      variants={flyIn}
      initial="initial"
      whileInView="animate"
      whileHover="whileHover"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="cloud-frame">
        <img src={CloudFrameImage} alt="" className="cloud-bg" />
        <img src={src} alt={alt} className="dev-photo" />
      </div>
    </motion.div>
  );
}

/*===================  
   Terminado :D
===================*/