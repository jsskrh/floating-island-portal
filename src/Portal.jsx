import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import {
  AlwaysStencilFunc,
  DoubleSide,
  EquirectangularReflectionMapping,
  LinearEncoding,
  ReplaceStencilOp,
  Scene,
  TextureLoader,
  WebGLRenderTarget,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import FillQuad from "./FillQuad";

const scene = new Scene();
scene.background = new TextureLoader().load(
  "/textures/galaxy.jpg",
  (texture) => {
    texture.encoding = LinearEncoding;
    texture.mapping = EquirectangularReflectionMapping;
  }
);

const target = new WebGLRenderTarget(window.innerWidth, window.innerHeight);

window.addEventListener("resize", () => {
  target.setSize(window.innerWidth, window.innerHeight);
});

const Portal = () => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  const model = useLoader(GLTFLoader, "/models/portal.glb");
  const mask = useLoader(GLTFLoader, "/models/portal_mask.glb");

  useFrame((state) => {
    state.gl.setRenderTarget(target);
    state.gl.render(scene, state.camera);
    state.gl.setRenderTarget(null);
  });

  useEffect(() => {
    if (!model) return;

    let mesh = model.scene.children[0];
    mesh.material.envMapIntensity = 3.5;

    let maskMesh = mask.scene.children[0];
    maskMesh.material.side = DoubleSide;
    maskMesh.material.transparent = false;
    maskMesh.material.stencilWrite = true;
    maskMesh.material.stencilRef = 1;
    maskMesh.material.stencilFunc = AlwaysStencilFunc;
    maskMesh.material.stencilZPass = ReplaceStencilOp;
  }, [model, mask]);

  return (
    <>
      <primitive object={model.scene} />
      <primitive
        object={mask.scene}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => window.open("https://jesseakorah.netlify.app", "_blank")}
      />
      <FillQuad map={target.texture} maskId={1} />
    </>
  );
};

export default Portal;
