import { React, useState } from 'react'

const Footer = () => {

    const [toggleBurger, settoggleBurger] = useState(false)

    const [itsCheckedF, setitsCheckedF] = useState({
        tab1: true,
        tab2: false,
        tab3: false,
        tab4: false,
    })

    function checkThisF(tab) {
        switch (tab) {
            case "tab1":
                setitsCheckedF({
                    ...itsCheckedF,
                    tab1: true,
                    tab2: false,
                    tab3: false,
                    tab4: false,
                })
                break;

            case "tab2":
                setitsCheckedF({
                    ...itsCheckedF,
                    tab1: false,
                    tab2: true,
                    tab3: false,
                    tab4: false,
                })
                break;

            case "tab3":
                setitsCheckedF({
                    ...itsCheckedF,
                    tab1: false,
                    tab2: false,
                    tab3: true,
                    tab4: false,
                })
                break;

            case "tab4":
                setitsCheckedF({
                    ...itsCheckedF,
                    tab1: false,
                    tab2: false,
                    tab3: false,
                    tab4: true,
                })
                break;

            default:
                setitsCheckedF({
                    ...itsCheckedF,
                    tab1: true,
                    tab2: false,
                    tab3: false,
                    tab4: false,
                })
                break;
        }
    }

    return (
        <div className={toggleBurger ? "footer" : "footer active"} >


            <div className='nav-container' >


                <div className='container' >
                    <input type="radio" id="tab1" name="tab" defaultChecked={itsCheckedF.tab1} onClick={() => { checkThisF("tab1"); console.log("hello"); }} />
                    <label htmlFor="tab1"><i ></i> Features</label>
                    <input type="radio" id="tab2" name="tab" defaultChecked={itsCheckedF.tab2} onClick={() => { checkThisF("tab2") }} />
                    <label htmlFor="tab2"><i ></i> History</label>
                    <input type="radio" id="tab3" name="tab" defaultChecked={itsCheckedF.tab3} onClick={() => { checkThisF("tab3") }} />
                    <label htmlFor="tab3"><i ></i> Reviews</label>
                    <input type="radio" id="tab4" name="tab" defaultChecked={itsCheckedF.tab4} onClick={() => { checkThisF("tab4") }} />
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

export default Footer