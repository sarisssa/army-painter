import React, { Suspense, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  Plane,
  Environment,
  Sky
} from "@react-three/drei";

import { HexColorPicker } from "react-colorful";
import { proxy, useSnapshot } from "valtio";

import { TextureLoader } from "three/src/loaders/TextureLoader";

import "./App.css";


const state = proxy({
  curArmour: {
    name: "",
    key: ""
  },
  curColour: "#ffffff",
  colours: {
    helmet: "#FF0000",
    cuirass: "#ffffff",
    leftVambrace: "#ffffff",
    rightVambrace: "#ffffff",
    backpack: "#ffffff",
    leftPauldron: "#ffffff",
    rightPauldron: "#ffffff",
    leftGreaves: "#ffffff",
    rightGreaves: "#ffffff"
  }
});

function Model({ ...props }) {

  const snap = useSnapshot(state);

  const handleClick = (e, str, key) => {
    e.stopPropagation();
    state.curArmour.name = str;
    state.curArmour.key = key;
    console.log("test", state);
  };

  const group = useRef();

  const { nodes, materials } = useGLTF("/black-templar/bt.gltf");

  return (
    <group ref={group} {...props} dispose={null} position={[0, -150, 0]}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <mesh
          onClick={(e) => handleClick(e, "Helmet", "helmet")}
          geometry={nodes.Object_6.geometry}
          material={materials.wire_088199225}
          material-color={snap.colours.helmet}
        />
        <mesh
          onClick={(e) => handleClick(e, "Cuirass", "cuirass")}
          geometry={nodes.Object_7.geometry}
          material={materials.wire_134110008}
          material-color={snap.colours.cuirass}
        />
        <mesh
          onClick={(e) => handleClick(e, "Left Vambrace", "leftVambrace")}
          geometry={nodes.Object_3.geometry}
          material={materials.wire_026177026}
          material-color={snap.colours.leftVambrace}
        />
        <mesh
          onClick={(e) => handleClick(e, "Right Vambrace", "rightVambrace")}
          geometry={nodes.Object_2.geometry}
          material={materials.wire_008110134}
          material-color={snap.colours.rightVambrace}
        />
        <mesh
          onClick={(e) => handleClick(e, "Backpack", "backpack")}
          geometry={nodes.Object_4.geometry}
          material={materials.wire_028089177}
          material-color={snap.colours.backpack}
        />
        <mesh
          onClick={(e) => handleClick(e, "Left Pauldron", "leftPauldron")}
          geometry={nodes.Object_8.geometry}
          material={materials.wire_154185229}
          material-color={snap.colours.leftPauldron}
        />
        <mesh
          onClick={(e) => handleClick(e, "Right Pauldron", "rightPauldron")}
          geometry={nodes.Object_9.geometry}
          material={materials.wire_224198087}
          material-color={snap.colours.rightPauldron}
        />
        <mesh
          onClick={(e) => handleClick(e, "Left Greaves", "leftGreaves")}
          geometry={nodes.Object_10.geometry}
          material={materials.wire_227152152}
          material-color={snap.colours.leftGreaves}
        />
        <mesh
          onClick={(e) => handleClick(e, "Right Greaves", "rightGreaves")}
          geometry={nodes.Object_5.geometry}
          material={materials.wire_086086086}
          material-color={snap.colours.rightGreaves}
        />
      </group>
    </group>
  );
}

const DesertPlane = () => {
  const texture = useLoader(TextureLoader, "desert.avif");

  return (
    <Plane
      args={[2500, 900, 10]}
      position={[0, -5, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <meshPhysicalMaterial color="tan" map={texture} />
    </Plane>
  );
};

function App() {
  const snap = useSnapshot(state);

  const handleChange = (color) => {
    state.curColour = color;
    state.colours[state.curArmour.key] = color;
  };

  return (
    <div className="canvas-container">
      <h1 className="current-armour-header">{snap.curArmour.name}</h1>
      <HexColorPicker
        className="model-painter"
        color={snap.curColour}
        onChange={handleChange}
      />
      <Canvas
        style={{ minHeight: "100vh" }}
        camera={{ position: [0, 80, 50] }}
      >
        <group rotation={[0, 0, 0]} position={[0, -35, 30]}>
          <Suspense fallback={null}>
            <DesertPlane />
            <group scale={0.25} position={[0, 32, 0]}>
              <Model />
              <Environment preset="city" />
              <Sky />
            </group>
          </Suspense>
        </group>
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

export default App;
