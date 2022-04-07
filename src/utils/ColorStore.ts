import { proxy } from "valtio";

export type ArmourColorKeys =
    "helmet" |
    "cuirass" |
    "leftVambrace" |
    "rightVambrace" |
    "backpack" |
    "leftPauldron" |
    "rightPauldron" |
    "leftGreaves" |
    "rightGreaves";

type ArmourColours = {
    [key in ArmourColorKeys]: `#${number | string}`;
}

interface IArmour {
    name: string,
    key: ArmourColorKeys | undefined
}

export const colorState: {
    curArmour: IArmour,
    curColour: string,
    colours: ArmourColours
} = proxy({
    curArmour: {
        name: "",
        key: undefined
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

