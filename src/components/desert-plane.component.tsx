import { useLoader } from "@react-three/fiber";
import { Plane } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import Rock from "./rock.component";
import { RepeatWrapping, Vector2 } from "three";

const DesertPlane = (): JSX.Element => {
    const texture = useLoader(TextureLoader, "sand.jpeg");
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.set(100, 100);

    return (
        <Plane
            args={[500, 500, 1000]}
            position={[0, -1, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <meshPhysicalMaterial roughness={1} clearcoatRoughness={1} map={texture} />
            <Rock />
        </Plane>
    );
};

export default DesertPlane;