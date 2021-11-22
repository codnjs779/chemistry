const initialState = {
    meData: [],
    youData: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ME_DATA":
            return {
                ...state,
                meData: [...state.meData, action.payload],
            };
        case "ADD_YOU_DATA":
            return {
                ...state,
                youData: [...state.youData, action.payload],
            };
        default:
            return state;
    }
};

export default reducer;
