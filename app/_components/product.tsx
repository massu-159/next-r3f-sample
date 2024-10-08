"use client"
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function CustomImage({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="relative w-full h-[100vh] flex justify-center items-center snap-center perspective-[500px]">
      <div ref={ref} className="relative w-[400px] h-[400px] m-[20px] overflow-hidden max-h-[90vh]">
        <div className="absolute w-[400px] h-[400px] bg-blue-500"></div>
      </div>
      <motion.h2 style={{ y }} className="absolute left-[calc(50%+130px)] text-9xl ">{`#00${id}`}</motion.h2>
    </section>
  );
}

const Product = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    });
  return (
    <>
      {[1, 2, 3, 4, 5].map((image) => (
        <CustomImage key={image} id={image} />
      ))}
      <motion.div className='progress' style={{ scaleX }} />
    </>
  );
}

export default Product



