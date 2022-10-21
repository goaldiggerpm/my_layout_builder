const initialData = {
    haveHeader: false,
    haveFooter: false,
}

const LayoutReducer = (state = initialData, action) => {
    switch (action.type) {
        case "TOGGLE_HEADER":
            let { header_Data } = action.payload
            return {
                ...state,
                haveHeader: header_Data
            }
        case "TOGGLE_FOOTER":
            let { footer_Data } = action.payload
            return {
                ...state,
                haveFooter: footer_Data
            }
        default:
            return state
    }
}

export default LayoutReducer