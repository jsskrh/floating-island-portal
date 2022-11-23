import { Text3D } from "@react-three/drei";
import React from "react";

const Words = () => {
  return (
    <>
      <Text3D
        font={"/fonts/Roboto_Regular.json"}
        size={0.275}
        height={0.065}
        curveSegments={12}
        position={[3.75, 5.65, 0.75]}
        rotation={[0, -0.2, -0.05]}
      >
        JSSKRH
        <meshStandardMaterial color={[1, 0.15, 0.1]} emissive={[1, 0.1, 0]} />
      </Text3D>

      <Text3D
        font={"/fonts/Roboto_Regular.json"}
        size={0.575}
        height={0.065}
        curveSegments={12}
        position={[3.5, 6, 0]}
        rotation={[0, -0.35, -0.05]}
      >
        Portal
        <meshStandardMaterial color={[1, 0.15, 0.1]} emissive={[1, 0.1, 0]} />
      </Text3D>
    </>
  );
};

export default Words;
