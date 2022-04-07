import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import { useSnapshot } from "valtio";
import { colorState } from "./utils/ColorStore";

import Model from "./components/model.component";
import Drawer from "./components/drawer/drawer.component";
import DesertPlane from "./components/desert-plane.component";

import "./App.css";

const App = () => {
  const snap = useSnapshot(colorState);

  return (
    <div className="canvas-container">
      <h1 className="current-armour-header">{snap.curArmour.name}</h1>
      <Drawer />
      <Canvas className='canvas'
        camera={{
          position: [0, 2, -5],
          far: 100
        }}
      >
        <rectAreaLight
          height={60}
          width={60}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 20, -15]}
          lookAt={[0, 100, 0] as any} />
        <Suspense fallback={null}>
          <directionalLight intensity={0.25} />
          <Sky sunPosition={[2, 2, 2]} />

          <group rotation={[0, 0, 0]} position={[0, -1, 0]}>
            {/* <PerspectiveCamera makeDefault={true} /> */}
            <Model position={[0, -1, 0]} />
            <DesertPlane />
          </group>
        </Suspense>
        {/* <PresentationControls makeDefault /> */}
        <OrbitControls
          minZoom={100}
          minDistance={5}
          maxDistance={10}
          maxPolarAngle={Math.PI / 2}
          maxAzimuthAngle={Math.PI / 2}
          makeDefault={true} />
      </Canvas>
    </div>
  );
}

export default App;
