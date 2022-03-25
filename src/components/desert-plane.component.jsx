import { useLoader } from "@react-three/fiber";
import { Plane } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import Rock from "./rock.component";

const DesertPlane = () => {
    const texture = useLoader(TextureLoader, "desert.avif");

    return (
        <Plane
            args={[2500, 900, 10]}
            position={[0, -5, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <meshPhysicalMaterial color="tan" map={texture} />
            <Rock />
        </Plane>
    );
};

export default DesertPlane;