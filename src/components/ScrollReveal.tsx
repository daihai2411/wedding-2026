import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
}

const ScrollReveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 50,
}: ScrollRevealProps) => {
  const xOffset =
    direction === "left" ? distance : direction === "right" ? -distance : 0;
  const yOffset =
    direction === "up" ? distance : direction === "down" ? -distance : 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset, y: yOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
