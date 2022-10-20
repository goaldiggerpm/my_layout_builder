import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Header from '../../components/Header/Index'

import { addHeader, deleteHeader } from '../../redux/actions/Index'

function Index() {

    // const [haveHeader, sethaveHeader] = useState(false)
    const haveHeader = useSelector((state) => state.layoutReducer.haveHeader)
    const dispatch = useDispatch()

    return (
        <div>
            {
                haveHeader ?
                    <Header />
                    :
                    null
            }
            <div onClick={() => dispatch(addHeader(!haveHeader))} >Click Me!</div>
        </div>
    )
}

export default Index