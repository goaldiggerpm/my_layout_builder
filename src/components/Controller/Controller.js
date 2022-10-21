import { React, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Switch from "react-switch";

import { addHeader, addFooter } from '../../redux/actions/index'

const Controller = () => {


    const haveHeader = useSelector((state) => state.LayoutReducer.haveHeader)
    const haveFooter = useSelector((state) => state.LayoutReducer.haveFooter)
    const dispatch = useDispatch()

    const [logoPosition, setLogoPosition] = useState("Left");

    function onChangeLogoValue(event) {
        setLogoPosition(event.target.value);
    }

    const [presetColor, setPresetColor] = useState("Blue");

    function onChangeColorValue(event) {
        setPresetColor(event.target.value);
    }

    const [toggleHeader, setToggleHeader] = useState(false);

    function changeHeader(val) {
        setToggleHeader(val)
        dispatch(addHeader(!haveHeader))
    }

    const [toggleFooter, setToggleFooter] = useState(false);

    function changeFooter(val) {
        setToggleFooter(val)
        dispatch(addFooter(!haveFooter))
    }

    const [drawerModeOverlay, setDrawerModeOverlay] = useState(false);

    function changeDrawerMode(val) {
        setDrawerModeOverlay(val)
    }

    const [drawerPositionToLeft, setDrawerPositionToLeft] = useState(false);
    const [drawerPositionToRight, setDrawerPositionToRight] = useState(false);

    function changeDrawerPositionLeft(val) {
        setDrawerPositionToLeft(true)
        setDrawerPositionToRight(false)
    }

    function changeDrawerPositionRight(val) {
        setDrawerPositionToLeft(false)
        setDrawerPositionToRight(true)
    }

    const [haveNavigation, sethaveNavigation] = useState(false)

    function changeNavigation(val) {
        sethaveNavigation(val)
    }

    const [haveBottomMenu, sethaveBottomMenu] = useState(false)

    function changeBottomMenu(val) {
        sethaveBottomMenu(val)
    }



    return (
        <div className='controller-container' >

            <div className='controller-box' >

                {/* for poistioning and disabling logo */}
                <div onChange={onChangeLogoValue}>
                    <input type="radio" value="Left" name="logoPosition" checked={logoPosition === "Left"} /> Left
                    <input type="radio" value="Right" name="logoPosition" checked={logoPosition === "Right"} /> Right
                    <input type="radio" value="Center" name="logoPosition" checked={logoPosition === "Center"} /> Center
                    <input type="radio" value="Disable" name="logoPosition" checked={logoPosition === "Disable"} /> Disable
                </div>

                {/* for changing color */}
                <div onChange={onChangeColorValue}>
                    <input type="radio" value="Blue" name="presetColor" checked={presetColor === "Blue"} /> Blue (&#35;1976d2)
                    <input type="radio" value="Red" name="presetColor" checked={presetColor === "Red"} /> Red (&#35;ff0000)
                </div>

                <label className='toggle-labels' >
                    <Switch onChange={changeHeader} checked={toggleHeader} />
                    <span>I want a Header</span>
                </label>

                <label className='toggle-labels' >
                    <Switch onChange={changeFooter} checked={toggleFooter} />
                    <span>I want a Footer</span>
                </label>

                <label className='toggle-labels' >
                    <Switch onChange={changeDrawerMode} checked={drawerModeOverlay} />
                    <span>I want a Drawer Overlay Mode (requires Header or Footer)</span>
                </label>

                <label className='toggle-labels' >
                    <Switch onChange={changeDrawerPositionLeft} checked={drawerPositionToLeft} />
                    <span>I want a left-side Drawer</span>
                </label>

                <label className='toggle-labels' >
                    <Switch onChange={changeDrawerPositionRight} checked={drawerPositionToRight} />
                    <span>I want a right-side Drawer</span>
                </label>

                <label className='toggle-labels' >
                    <Switch onChange={changeNavigation} checked={haveNavigation} />
                    <span>I want navigation tabs (requires Header)</span>
                </label>

                <label className='toggle-labels' >
                    <Switch onChange={changeBottomMenu} checked={haveBottomMenu} />
                    <span>I want Bottom Menu (requires Footer)</span>
                </label>

            </div>


        </div>
    )
}

export default Controller