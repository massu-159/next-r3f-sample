"use client";

import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
// モデル
const Model = () => {
  const { scene } = useGLTF("/scene.gltf");
  return (
    <group>
      <primitive object={scene} scale={1} position={[0, -2, 0]} rotation={[0, - Math.PI / 2.5, 0]} />
    </group>
  );
};

const Content = () => {


  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 130, delay: 0.6 }}
      className='h-[600px] w-[1000px]'
    >
      <Canvas camera={{ position: [0, 3, 12.5], fov: 30 }}>
        <ambientLight intensity={2} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} />
        <Model />
      </Canvas>
    </motion.div>
  );
};

export default Content;
