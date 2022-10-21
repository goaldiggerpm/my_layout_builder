import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Header from '../../components/Header/Header'

import { addHeader } from '../../redux/actions/index.js'

const Index = () => {

    const haveHeader = useSelector((state) => state.LayoutReducer.haveHeader)
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