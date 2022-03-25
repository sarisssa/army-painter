import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { HexColorPicker } from "react-colorful";
import { proxy, useProxy, useSnapshot } from "valtio";

import './App.css';

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

const Model = ({ ...props }) => {

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
    <group ref={group} {...props} dispose={null} position={[0, -150, -20]}>
      <group rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
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
  const snap = useSnapshot(state);

  return (
    <div className="canvas-container" >
      <h1 className="current-armour">{snap.curArmour.name}</h1>
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
