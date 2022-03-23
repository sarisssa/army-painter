import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

import './App.css';

const Model = ({ ...props }) => {
  const group = useRef();

  const { nodes, materials } = useGLTF("/black-templar/bt.gltf");
  return (
    <group ref={group} {...props} dispose={null} position={[0, -150, -20]}>
      <group rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.wire_008110134}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.wire_026177026}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.wire_028089177}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.wire_086086086}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.wire_088199225}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.wire_134110008}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.wire_154185229}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.wire_224198087}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials.wire_227152152}
        />
      </group>
    </group>
  );
}

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 20]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={true} enablePan={true} />
    </Canvas>
  );
}

export default App;
