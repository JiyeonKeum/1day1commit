import { CalcAction } from '../actions';

const initialState = {
    count: 0,
    input: ''
};

const CalcReducer = (state = initialState, action) => {
    switch(action.type) {
        case CalcAction.INCREASEMENT: {
            return {
                ...state,
                count: state.count + 1
            };
        }
        case CalcAction.DECREASEMENT: {
            return {
                ...state,
                count: state.count - 1
            };
        }
        case CalcAction.CUSTOM: {
            return {
                ...state,
                count: state.count + action.input,
                input: action.input
            };
        }
        default: {
            return state;
        }
    }
}

export default CalcReducer;