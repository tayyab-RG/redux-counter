const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'inc':
            return state + 1;
        case 'dec':
            return state - 1;
        case 'double':
            return state * 2;
        case 'res':
            return 0;
        default:
            return state;
    }
}
export default counterReducer;