import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";


const Rock = (): JSX.Element => {
    const group = useRef();
    const { nodes, materials } = useGLTF("/Rock_5.glb");
    return (
        <group scale={0.25} ref={group} position={[5, 0, 0]} dispose={null}>
            <mesh
                geometry={(nodes.Rock_5 as Mesh).geometry}
                material={materials.Rock_5}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.01}
            />
        </group>
    );
}

export default Rock;


