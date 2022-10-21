import { React, useState } from 'react'

import Logo from '../../assets/tigeen_computing_logo.png'

const Header = () => {

    const [toggleBurger, settoggleBurger] = useState(false)

    const [itsChecked, setitsChecked] = useState({
        tab1: true,
        tab2: false,
        tab3: false,
        tab4: false,
    })

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
        <div className={toggleBurger ? "header" : "header active"} >


            <div className='nav-container' >

                <img className='main-img' src={Logo} alt='main' ></img>

                <div className='container' >
                    <input type="radio" id="tab1" name="tab" defaultChecked={itsChecked.tab1} onClick={() => { checkThis("tab1"); console.log("hello"); }} />
                    <label htmlFor="tab1"><i ></i> Features</label>
                    <input type="radio" id="tab2" name="tab" defaultChecked={itsChecked.tab2} onClick={() => { checkThis("tab2") }} />
                    <label htmlFor="tab2"><i ></i> History</label>
                    <input type="radio" id="tab3" name="tab" defaultChecked={itsChecked.tab3} onClick={() => { checkThis("tab3") }} />
                    <label htmlFor="tab3"><i ></i> Reviews</label>
                    <input type="radio" id="tab4" name="tab" defaultChecked={itsChecked.tab4} onClick={() => { checkThis("tab4") }} />
                    <label htmlFor="tab4"><i ></i> Share</label>
                    {/* <div className="line"></div> */}

                </div>


            </div>

            <div className="burger" onClick={() => { settoggleBurger(!toggleBurger) }} >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className={toggleBurger ? "nav" : "nav active"}>
                <ul>
                    <div>p</div>
                    <div>m</div>
                </ul>
            </div>

        </div>
    )
}

export default Header