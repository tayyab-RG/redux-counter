const loggedReducer = (state = false, action) => {
    switch (action.type) {
        case 'toggle_sign':
            return !state;
        default:
            return state;
    }
}

export default loggedReducer;