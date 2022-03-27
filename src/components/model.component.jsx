import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { colorState } from ".././utils/store";
import { useSnapshot } from "valtio";

const Model = ({ ...props }) => {

    const snap = useSnapshot(colorState);

    const handleClick = (e, str, key) => {
        e.stopPropagation();
        colorState.curArmour.name = str;
        colorState.curArmour.key = key;
    };

    const group = useRef();

    const { nodes, materials } = useGLTF("/black-templar/bt.gltf");

    return (
        <group ref={group} {...props} scale={0.020} dispose={null} position={[0, -1, 0]}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
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

export default Model;