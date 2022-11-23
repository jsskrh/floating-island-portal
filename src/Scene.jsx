import {
  Environment,
  Float,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import React, { Suspense } from "react";
import FloatingIsland from "./FloatingIsland";
import FloatingRocks from "./FloatingRocks";
import Grass from "./Grass";
import Portal from "./Portal";
import Rocks from "./Rocks";
import Trees from "./Trees";
import Words from "./Words";

const Scene = () => {
  return (
    <Suspense fallback={null}>
      <Environment background={"only"} files={"/textures/bg.hdr"} />
      <Environment background={false} files={"/textures/envmap.hdr"} />

      <PerspectiveCamera
        makeDefault
        fov={50}
        position={[-1.75, 10.85, 20.35]}
      />
      <OrbitControls target={[1, 5, 0]} maxPolarAngle={Math.PI * 0.5} />

      <Float speed={0.5} rotationIntensity={0.6} floatIntensity={0.6}>
        <Portal />
        <Rocks />
        <Trees />
        <Words />
        <Grass />
        <FloatingIsland />
      </Float>
      <FloatingRocks />
    </Suspense>
  );
};

export default Scene;
