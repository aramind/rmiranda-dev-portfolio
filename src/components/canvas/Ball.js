import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float
      speed={1.75}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh
        castShadow
        receiveShadow
        scale={2.75}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          // color="#1a5559"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          scale={[-1, 1, 1]}
          map={decal}
          flatShading
          mirror={false}
        />
        <Decal
          position={[0, 0, -1]}
          scale={[-1, 1, 1]}
          map={decal}
          flatShading
          mirror={false}
        />
        <Decal
          position={[1, 0, 0]}
          scale={[-1, 1, 1]}
          map={decal}
          flatShading
          mirror={false}
        />
        <Decal
          position={[-1, 0, 0]}
          scale={[-1, 1, 1]}
          map={decal}
          flatShading
          mirror={false}
        />
        <Decal
          position={[0, 1, 0]}
          scale={[-1, 1, 1]}
          map={decal}
          flatShading
          mirror={false}
        />
        <Decal
          position={[0, -1, 0]}
          scale={[-1, 1, 1]}
          map={decal}
          flatShading
          mirror={false}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const autoRotateSpeed = (Math.floor(Math.random() * 2) + 1) * 2;
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          // autoRotate
          autoRotateSpeed={autoRotateSpeed}
          maxPolarAngle={Math.PI / 2} // Limit rotation to the top hemisphere
          minPolarAngle={Math.PI / 2} // Limit rotation to the bottom hemisphere
        />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
