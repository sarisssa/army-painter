import { useState } from "react";
import { colorState } from "../../utils/store";
import { useSnapshot } from "valtio";
import { HexColorPicker } from "react-colorful";

import { animated as a, useSpring } from "react-spring";

import './drawer.styles.css';

const Drawer = () => {
    const snap = useSnapshot(colorState);

    const [active, setActive] = useState(true);

    const handleChange = (color) => {
        colorState.curColour = color;
        colorState.colours[colorState.curArmour.key] = color;
    };

    const handleToggle = (e) => {
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
                    onChange={handleChange}
                />
            </a.div>
        </a.section>
    )
}

export default Drawer;

