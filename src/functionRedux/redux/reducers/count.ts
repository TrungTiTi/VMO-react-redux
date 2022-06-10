import {countAction} from '../actions/count'

enum CountActionKind {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
}
interface CountAction {
    type: CountActionKind;
}

const initialState = { count: 0}

const count = (state = initialState, actions:CountAction) => {
   
    switch (actions.type) {
        case countAction.INCREMENT:
            return {...state, count: state.count + 1}
        case countAction.DECREMENT:
            return {...state, count: state.count - 1}
        default:
            return state;
    }
};

export default count;
