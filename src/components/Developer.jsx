export const actionType = {
    ADD_Developer: 'ADD_Developer'
};

export const developer = ( state, action ) => {
    switch ( action.type ) {
        case actionType.ADD_Developer:
            return [ ...state, {
                name: action.payload.name,
                favProgLanguages: action.payload.favProgLanguages,
                favTech: action.payload.favTech,
                favFood: action.payload.favFood,
                favDrink: action.payload.favDrink
            } ];
        default:
            return state;
    }
};