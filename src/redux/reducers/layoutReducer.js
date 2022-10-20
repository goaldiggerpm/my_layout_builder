const initialData = {
    haveHeader: false
}

const layoutReducer = (state = initialData, action) => {
    switch (action.type) {
        case "TOGGLE_HEADER":
            const { data } = action.payload
            return {
                ...state,
                haveHeader: data
            }
        default:
            return state
    }
}

export default layoutReducer