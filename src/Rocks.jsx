import { useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Rocks = () => {
  const gltf = useLoader(GLTFLoader, "/models/rocks.glb");

  return <primitive object={gltf.scene} />;
};

export default Rocks;
