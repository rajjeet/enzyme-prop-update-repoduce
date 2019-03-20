import {applyMiddleware, combineReducers, createStore} from "redux";

let sample = (state = {counter: 0}, action) => {
    switch (action.type) {
        case "ADD_GLOBAL_COUNTER":
            return Object.assign({}, state, {counter: state.counter + 2});
        default:
            return state;
    }
};

const rootReducer = combineReducers({sample});
export default createStore(rootReducer, {}, applyMiddleware());
