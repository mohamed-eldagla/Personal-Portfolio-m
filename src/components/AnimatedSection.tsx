import { motion, type TargetAndTransition } from "framer-motion";
import { ReactNode } from "react";

type AnimationVariant = "default" | "scale" | "slideLeft" | "slideRight";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: AnimationVariant;
}

const variants: Record<AnimationVariant, { hidden: TargetAndTransition; visible: TargetAndTransition }> = {
  default: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  scale: {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -60, y: 20 },
    visible: { opacity: 1, x: 0, y: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 60, y: 20 },
    visible: { opacity: 1, x: 0, y: 0 },
  },
};

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  variant = "default",
}: Props) => {
  const v = variants[variant];
  return (
    <motion.div
      initial={v.hidden}
      whileInView={v.visible}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
