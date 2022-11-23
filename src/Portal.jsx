import { useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Portal = () => {
  const model = useLoader(GLTFLoader, "/models/portal.glb");
  const mask = useLoader(GLTFLoader, "/models/portal_mask.glb");

  return (
    <>
      <primitive object={model.scene} />
      <primitive object={mask.scene} />
    </>
  );
};

export default Portal;
