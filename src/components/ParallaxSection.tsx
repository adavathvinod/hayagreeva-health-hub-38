import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  bgImage: string;
  className?: string;
  overlay?: string;
}

const ParallaxSection = ({ children, bgImage, className = "", overlay = "bg-charcoal/60" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y }}
        className="absolute inset-0 -top-[20%] -bottom-[20%]"
      >
        <img src={bgImage} alt="" className="w-full h-full object-cover" />
      </motion.div>
      <div className={`absolute inset-0 ${overlay}`} />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ParallaxSection;
