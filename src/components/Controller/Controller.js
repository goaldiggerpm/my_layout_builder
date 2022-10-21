import { React, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Switch from "react-switch";

import { addHeader, addFooter, logoChangePosition, changeNavigationTabs, changeBottomMenu, changeDrawerSide, changePresetColor, changeDrawerType } from '../../redux/actions/index'

// component to control the widgets
const Controller = () => {

    // redux states
    const haveHeader = useSelector((state) => state.LayoutReducer.haveHeader)
    const haveFooter = useSelector((state) => state.LayoutReducer.haveFooter)
    const navigationTab = useSelector((state) => state.LayoutReducer.navigationTab)
    const bottomMenu = useSelector((state) => state.LayoutReducer.bottomMenu)

    const dispatch = useDispatch()

    // states
    const [logoPosition, setLogoPosition] = useState("Left");
    const [presetColor, setPresetColor] = useState("Blue");
    const [toggleHeader, setToggleHeader] = useState(false);
    const [toggleFooter, setToggleFooter] = useState(false);
    const [drawerModeOverlay, setDrawerModeOverlay] = useState(false);
    const [drawerPositionToLeft, setDrawerPositionToLeft] = useState(false);
    const [drawerPositionToRight, setDrawerPositionToRight] = useState(false);
    const [haveNavigation, sethaveNavigation] = useState(false)
    const [haveBottomMenu, sethaveBottomMenu] = useState(false)

    // function to change the logo position
    function onChangeLogoValue(event) {
        setLogoPosition(event.target.value)
        dispatch(logoChangePosition(event.target.value))
    }

    // function to change the color of preset
    function onChangeColorValue(event) {
        setPresetColor(event.target.value);
        dispatch(changePresetColor(event.target.value))
    }

    // function to hide/show the header
    function changeHeader(val) {
        setToggleHeader(val)
        dispatch(addHeader(!haveHeader))
    }

    // function to hide/show the footer
    function changeFooter(val) {
        setToggleFooter(val)
        dispatch(addFooter(!haveFooter))
    }

    // function to change the drawer mode
    function changeDrawerMode(val) {
        setDrawerModeOverlay(val)
        dispatch(changeDrawerType(val))
    }

    // function to change the drawer position to left
    function changeDrawerPositionLeft(val) {
        setDrawerPositionToLeft(true)
        setDrawerPositionToRight(false)
        dispatch(changeDrawerSide("Left"))
    }

    // function to change the drawer position to right
    function changeDrawerPositionRight(val) {
        setDrawerPositionToLeft(false)
        setDrawerPositionToRight(true)
        dispatch(changeDrawerSide("Right"))
    }

    // function to hide/show the navigation
    function changeNavigation(val) {
        sethaveNavigation(val)
        dispatch(changeNavigationTabs(!navigationTab))
    }

    // function to hide/show the bottom menu
    function changeBottomMenuTab(val) {
        sethaveBottomMenu(val)
        dispatch(changeBottomMenu(!bottomMenu))
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
                    <input type="radio" value="#1976d2" name="presetColor" checked={presetColor === "#1976d2"} /> Blue (&#35;1976d2)
                    <input type="radio" value="#ff0000" name="presetColor" checked={presetColor === "#ff0000"} /> Red (&#35;ff0000)
                </div>

                {/* Switches for actions */}
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
                    <Switch onChange={changeBottomMenuTab} checked={haveBottomMenu} />
                    <span>I want Bottom Menu (requires Footer)</span>
                </label>

            </div>


        </div>
    )
}

export default Controller