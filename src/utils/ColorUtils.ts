import { colorState } from "./ColorStore";

export const setColor = (color: `#${number | string}`): void => {
    colorState.curColour = color;
    if (colorState.curArmour.key) {
        colorState.colours[colorState.curArmour.key] = color;
    }
}