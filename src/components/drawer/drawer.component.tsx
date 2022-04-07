import { useState } from "react";
import { colorState } from "../../utils/ColorStore";
import { useSnapshot } from "valtio";
import { HexColorPicker } from "react-colorful";
import { setColor } from "../../utils/ColorUtils";

import { animated as a, useSpring } from "react-spring";

import './drawer.styles.css';

const Drawer = (): JSX.Element => {
    const snap = useSnapshot(colorState);

    const [active, setActive] = useState(true);

    const handleToggle = (): void => {
        setActive(!active)
    }

    const menuAnimation = useSpring({
        display: active ? 'block' : 'none'
    });

    const drawerAnimation = useSpring({
        right: active ? window.innerWidth - 500 : window.innerWidth,
        top: window.innerHeight / 10,
    });

    return (
        <a.section className='drawer' style={drawerAnimation}>
            <div className='drawer-button-container'>
                <button
                    className='drawer-toggle-button'
                    onClick={handleToggle}
                >
                    TOGGLE COLOR MENU
                </button>
            </div>
            <a.div className='menu-controls' style={menuAnimation}>
                <HexColorPicker
                    className='color-menu'
                    color={snap.curColour}
                    onChange={(value: string) => {
                        const color = value as `#${number | string}`; //Convert ColorPicker type from string to string interpolated type
                        setColor(color);
                    }}
                />
            </a.div>
        </a.section>
    )
}

export default Drawer;

