import Immutable from 'immutable';


const initialState = Immutable.Map({
    // TODO
});

export default function reducer(state = initialState, action) {
    switch(action.type) {
    case 'ACTION_TYPE':
        return state;
    default:
        return state;
    }
}
