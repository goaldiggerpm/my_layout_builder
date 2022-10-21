const initialData = {
    haveHeader: false,
    haveFooter: false,
    navLogoPosition: "Left",
    navigationTab: false,
    bottomMenu: false,
    drawerSide: "Left",
    colorCode: "#1976d2",
    drawerType: false
}

const LayoutReducer = (state = initialData, action) => {
    switch (action.type) {
        // to toggle header
        case "TOGGLE_HEADER":
            let { header_Data } = action.payload
            return {
                ...state,
                haveHeader: header_Data
            }
        // to toggle footer
        case "TOGGLE_FOOTER":
            let { footer_Data } = action.payload
            return {
                ...state,
                haveFooter: footer_Data
            }
        // to change logo posoition
        case "CHANGE_POSITION":
            let { logo_Data } = action.payload
            return {
                ...state,
                navLogoPosition: logo_Data
            }
        // to toggle navigation
        case "CHANGE_NAVIGATION":
            let { nav_Data } = action.payload
            return {
                ...state,
                navigationTab: nav_Data
            }
        // to toggle bottom menu
        case "CHANGE_BOTTOM_MENU":
            let { menu_Data } = action.payload
            return {
                ...state,
                bottomMenu: menu_Data
            }
        // to change drawer side
        case "CHANGE_DRAWER_SIDE":
            let { drawer_Data } = action.payload
            return {
                ...state,
                drawerSide: drawer_Data
            }
        // to change preset color
        case "CHANGE_COLOR":
            let { color_Data } = action.payload
            return {
                ...state,
                colorCode: color_Data
            }
        // to change drawer type 
        case "CHANGE_DRAWER_TYPE":
            let { drawerType_Data } = action.payload
            return {
                ...state,
                drawerType: drawerType_Data
            }
        default:
            return state
    }
}

export default LayoutReducer