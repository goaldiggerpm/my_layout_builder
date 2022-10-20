export const addHeader = (data) => {
    return {
        type: "TOGGLE_HEADER",
        payload: {
            data: data
        }
    }
}