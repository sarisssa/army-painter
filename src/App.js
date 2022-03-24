import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { HexColorPicker } from "react-colorful";
import { proxy, useProxy } from "valtio";

import './App.css';

const state = proxy({
  curArmour: null,
  armourCategories: {
    helmet: ['Helmet', "#ffffff"],
    cuirass: ['Cuirass', "#ffffff"],
    leftVambrance: ['Left Vambrace', "#ffffff"],
    rightVambrace: ['Right Vambrace', "#ffffff"],
    backpack: ['Backpack', "#ffffff"],
    leftPauldron: ['Left Pauldron', "#ffffff"],
    rightPauldron: ['Right Pauldron', "#ffffff"],
    leftGreaves: ['Left Greaves', "#ffffff"],
    rightGreaves: ['Right Greaves', "#ffffff"]
  }
});

const Model = ({ ...props }) => {
  const group = useRef();

  const { nodes, materials } = useGLTF("/black-templar/bt.gltf");
  return (
    <group ref={group} {...props} dispose={null} position={[0, -150, -20]}>
      <group rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.wire_088199225}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.wire_134110008}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.wire_026177026}
        />
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.wire_008110134}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.wire_028089177}
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
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.wire_086086086}
        />
      </group>
    </group>
  );
}

function App() {
  return (
    <div className="canvas-container" >
      <HexColorPicker className="model-painter" />
      <Canvas concurrent pixelRatio={[1, 1.5]}>
        <Camera />
        <ambientLight intensity={0.3} />
        <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 20]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enableZoom={true}
          enablePan={true}
        />
      </Canvas>
    </div>
  );
}

const Camera = () => {
  useEffect(() => {
    camera.position.set(-10, -250, 0);
    camera.rotation.set(0, 0, 0);
    camera.near = 0.1;
    camera.far = 10000;
    camera.updateProjectionMatrix();
  }, []);
  const { camera } = useThree();
  return null;
};

export default App;
