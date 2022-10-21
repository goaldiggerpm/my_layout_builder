
// action to add/remove header
export const addHeader = (data) => {
    return {
        type: "TOGGLE_HEADER",
        payload: {
            header_Data: data
        }
    }
}

// action to add/remove footer
export const addFooter = (data) => {
    return {
        type: "TOGGLE_FOOTER",
        payload: {
            footer_Data: data
        }
    }
}

// action to change logo position
export const logoChangePosition = (data) => {
    return {
        type: "CHANGE_POSITION",
        payload: {
            logo_Data: data
        }
    }
}

// action to add/remove navigation tabs
export const changeNavigationTabs = (data) => {
    return {
        type: "CHANGE_NAVIGATION",
        payload: {
            nav_Data: data
        }
    }
}

// action to add/remove bottom menu
export const changeBottomMenu = (data) => {
    return {
        type: "CHANGE_BOTTOM_MENU",
        payload: {
            menu_Data: data
        }
    }
}

// action to change the drawer side 
export const changeDrawerSide = (data) => {
    return {
        type: "CHANGE_DRAWER_SIDE",
        payload: {
            drawer_Data: data
        }
    }
}

// action to change the preset color 
export const changePresetColor = (data) => {
    return {
        type: "CHANGE_COLOR",
        payload: {
            color_Data: data
        }
    }
}

// action to change the drawer type 
export const changeDrawerType = (data) => {
    return {
        type: "CHANGE_DRAWER_TYPE",
        payload: {
            drawerType_Data: data
        }
    }
}