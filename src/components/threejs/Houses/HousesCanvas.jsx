import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Scene } from './Scene';

export default function HousesCanvas() {
  return (
    <Canvas shadows>
      {/* Add lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[3, 3, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={20}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Add a rotating cube */}
      <Scene />
      {/* Add orbit controls for the camera */}
      <OrbitControls />
    </Canvas>
  );
}
