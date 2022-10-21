export const addHeader = (data) => {
    return {
        type: "TOGGLE_HEADER",
        payload: {
            header_Data: data
        }
    }
}

export const addFooter = (data) => {
    return {
        type: "TOGGLE_FOOTER",
        payload: {
            footer_Data: data
        }
    }
}
