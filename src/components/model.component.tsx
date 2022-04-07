import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { colorState } from "../utils/ColorStore";
import { useSnapshot } from "valtio";
import { Mesh } from "three";
import { ThreeEvent, Vector3 } from "@react-three/fiber";
import { ArmourColorKeys } from "../utils/ColorStore";

type Props = {
    position: Vector3
}

const Model = ({ position }: Props): JSX.Element => {

    const snap = useSnapshot(colorState);

    const handleClick = (e: ThreeEvent<MouseEvent>, str: string, key: ArmourColorKeys): void => {
        e.stopPropagation();
        colorState.curArmour.name = str;
        colorState.curArmour.key = key;
    };

    const group = useRef();

    const { nodes, materials } = useGLTF("/black-templar/bt.gltf");

    return (
        <group ref={group} scale={0.020} dispose={null} position={position}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    onClick={(e) => handleClick(e, "Helmet", "helmet")}
                    geometry={(nodes.Object_6 as Mesh).geometry}
                    material={materials.wire_088199225}
                    material-color={snap.colours.helmet}
                />
                <mesh
                    onClick={(e) => handleClick(e, "Cuirass", "cuirass")}
                    geometry={(nodes.Object_7 as Mesh).geometry}
                    material={materials.wire_134110008}
                    material-color={snap.colours.cuirass}
                />
                <mesh
                    onClick={(e) => handleClick(e, "Left Vambrace", "leftVambrace")}
                    geometry={(nodes.Object_3 as Mesh).geometry}
                    material={materials.wire_026177026}
                    material-color={snap.colours.leftVambrace}
                />
                <mesh
                    onClick={(e) => handleClick(e, "Right Vambrace", "rightVambrace")}
                    geometry={(nodes.Object_2 as Mesh).geometry}
                    material={materials.wire_008110134}
                    material-color={snap.colours.rightVambrace}
                />
                <mesh
                    onClick={(e) => handleClick(e, "Backpack", "backpack")}
                    geometry={(nodes.Object_4 as Mesh).geometry}
                    material={materials.wire_028089177}
                    material-color={snap.colours.backpack}
                />
                <mesh
                    onClick={(e) => handleClick(e, "Left Pauldron", "leftPauldron")}
                    geometry={(nodes.Object_8 as Mesh).geometry}
                    material={materials.wire_154185229}
                    material-color={snap.colours.leftPauldron}
                />
                <mesh
                    onClick={(e) => handleClick(e, "Right Pauldron", "rightPauldron")}
                    geometry={(nodes.Object_9 as Mesh).geometry}
                    material={materials.wire_224198087}
                    material-color={snap.colours.rightPauldron}
                />
                <mesh
                    onClick={(e) => handleClick(e, "Left Greaves", "leftGreaves")}
                    geometry={(nodes.Object_10 as Mesh).geometry}
                    material={materials.wire_227152152}
                    material-color={snap.colours.leftGreaves}
                />
                <mesh
                    onClick={(e) => handleClick(e, "Right Greaves", "rightGreaves")}
                    geometry={(nodes.Object_5 as Mesh).geometry}
                    material={materials.wire_086086086}
                    material-color={snap.colours.rightGreaves}
                />
            </group>
        </group>
    );
}

export default Model;