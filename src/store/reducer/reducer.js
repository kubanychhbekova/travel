const initialState = {
    popular:[],
    product: [],
    cards:[]
};

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PRODUCT":
            return { ...state, product: action.payload };
        case "GET_POPULAR":
            return { ...state, popular: action.payload };
        case "GET_CARDS":
            const found = state.popular.find((el) => el.id === action.payload);
            return { ...state, cards:[ { ...found}]};
        default:
            return state;
    }
};