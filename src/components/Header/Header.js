import { React, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Logo from '../../assets/tigeen_computing_logo.png'

// header component
const Header = () => {

    // redux states
    const navLogoPosition = useSelector((state) => state.LayoutReducer.navLogoPosition)
    const navigationTab = useSelector((state) => state.LayoutReducer.navigationTab)
    const drawerSide = useSelector((state) => state.LayoutReducer.drawerSide)
    const colorCode = useSelector((state) => state.LayoutReducer.colorCode)

    const [toggleBurger, settoggleBurger] = useState(false)

    // states
    const [itsChecked, setitsChecked] = useState({
        tab1: true,
        tab2: false,
        tab3: false,
        tab4: false,
    })

    const [imgContainerName, setimgContainerName] = useState("logo-img-container left")

    // this hook is used to check the logo position
    useEffect(() => {
        switch (navLogoPosition) {
            case "Left":
                setimgContainerName("logo-img-container left")
                break;

            case "Right":
                setimgContainerName("logo-img-container right")
                break;

            case "Center":
                setimgContainerName("logo-img-container center")
                break;

            case "Disable":
                setimgContainerName("logo-img-container disable")
                break;

            default:
                setimgContainerName("logo-img-container left")
                break;
        }
    }, [navLogoPosition])


    // function to check the clicked tab 
    function checkThis(tab) {
        switch (tab) {
            case "tab1":
                setitsChecked({
                    ...itsChecked,
                    tab1: true,
                    tab2: false,
                    tab3: false,
                    tab4: false,
                })
                break;

            case "tab2":
                setitsChecked({
                    ...itsChecked,
                    tab1: false,
                    tab2: true,
                    tab3: false,
                    tab4: false,
                })
                break;

            case "tab3":
                setitsChecked({
                    ...itsChecked,
                    tab1: false,
                    tab2: false,
                    tab3: true,
                    tab4: false,
                })
                break;

            case "tab4":
                setitsChecked({
                    ...itsChecked,
                    tab1: false,
                    tab2: false,
                    tab3: false,
                    tab4: true,
                })
                break;

            default:
                setitsChecked({
                    ...itsChecked,
                    tab1: true,
                    tab2: false,
                    tab3: false,
                    tab4: false,
                })
                break;
        }
    }

    return (
        <div className={drawerSide == "Left" ? "header left" : drawerSide == "Right" ? "header right" : "header"} >

            <div className='nav-container' >

                <div className={imgContainerName} >
                    <img className='main-img' src={Logo} sty alt='main' ></img>
                </div>

                {
                    navigationTab ?
                        <div className='container' >
                            <input type="radio" id="tab1" name="tab" defaultChecked={itsChecked.tab1} onClick={() => { checkThis("tab1") }} />
                            <label htmlFor="tab1" style={{ background: itsChecked.tab1 == true ? `${colorCode}` : '#f4f4f4' }} ><i ></i> Features</label>
                            <input type="radio" id="tab2" name="tab" defaultChecked={itsChecked.tab2} onClick={() => { checkThis("tab2") }} />
                            <label htmlFor="tab2" style={{ background: itsChecked.tab2 == true ? `${colorCode}` : '#f4f4f4' }} ><i ></i> History</label>
                            <input type="radio" id="tab3" name="tab" defaultChecked={itsChecked.tab3} onClick={() => { checkThis("tab3") }} />
                            <label htmlFor="tab3" style={{ background: itsChecked.tab3 == true ? `${colorCode}` : '#f4f4f4' }} ><i ></i> Reviews</label>
                            <input type="radio" id="tab4" name="tab" defaultChecked={itsChecked.tab4} onClick={() => { checkThis("tab4") }} />
                            <label htmlFor="tab4" style={{ background: itsChecked.tab4 == true ? `${colorCode}` : '#f4f4f4' }} ><i ></i> Share</label>
                            {/* <div className="line"></div> */}
                        </div>
                        :
                        null
                }


            </div>

            <div className="burger" onClick={() => { settoggleBurger(!toggleBurger) }} >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className={toggleBurger ? "nav" : "nav active"} style={{ backgroundColor: `${colorCode}` }} >
                <ul>
                    <div>main</div>
                    <div>about</div>
                </ul>
            </div>

        </div>
    )
}

export default Header