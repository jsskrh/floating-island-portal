import { Sparkles } from "@react-three/drei";
import React from "react";

const Particles = () => {
  return (
    <>
      <Sparkles
        position={[1, 8, -4]}
        count={50}
        scale={[5, 3.5, 2.5]}
        color={"#ffaacc"}
        size={6}
        speed={0.2}
        noise={0.1}
      />

      <Sparkles
        position={[0, 6, 0]}
        count={50}
        scale={[12, 2, 12]}
        color={"#ffe6a8"}
        size={6}
        speed={0.2}
        noise={0.2}
      />

      <Sparkles
        position={[-5, 9, -5]}
        count={50}
        scale={[4, 4, 4]}
        color={"#ffe6a8"}
        size={6}
        speed={0.2}
        noise={0.2}
      />

      <Sparkles
        position={[5.5, 9, -8]}
        count={50}
        scale={[5, 5, 5]}
        color={"#ffe6a8"}
        size={6}
        speed={0.2}
        noise={0.2}
      />
    </>
  );
};

export default Particles;
