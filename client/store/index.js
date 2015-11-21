import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


const finalCreateStore = applyMiddleware(thunk)(createStore);

export default () => {
    return finalCreateStore(reducer);
};
