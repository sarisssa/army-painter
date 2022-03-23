import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


import './App.css';

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 20]} />
      <Suspense fallback={null}>
      </Suspense>
      <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={true} enablePan={true} />
    </Canvas>
  );
}

export default App;
