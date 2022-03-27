import { proxy } from "valtio";

export const colorState = proxy({
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