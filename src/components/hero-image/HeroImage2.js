import { Box } from "@mui/material";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const HeroImage2 = () => {
  const computer = useGLTF("./assets/desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight
        intensity={0.15}
        groundColor="black"
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={0.1}
        position={[0, -3.25, -1.5]
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 40 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense>
        <OrbitControls
          enableZoom={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <HeroImage2 />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
