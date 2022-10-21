import React from 'react'
import { useSelector } from 'react-redux'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Controller from '../../components/Controller/Controller'

// main Index page
const Index = () => {

    const haveHeader = useSelector((state) => state.LayoutReducer.haveHeader)
    const haveFooter = useSelector((state) => state.LayoutReducer.haveFooter)

    return (
        <div className='main-page' >
            {
                haveHeader ?
                    <Header />
                    :
                    null
            }
            <Controller />
            {
                haveFooter ?
                    <Footer />
                    :
                    null
            }
        </div>
    )
}

export default Index