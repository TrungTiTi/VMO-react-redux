import produce from 'immer';
import {countAction} from '../actions/count'

enum CountActionKind {
    INCREIMMER = 'INCREIMMER',
    DECREIMMER = 'DECREIMMER',
}
interface CountAction {
    type: CountActionKind;
}

const initialStates = { counter: 0}

const counter = (states = initialStates, actions:CountAction) => produce(states, (draf) => {
   
    switch (actions.type) {
        case countAction.INCREIMMER:
           draf.counter += 1 ;
           break 
        case countAction.DECREIMMER:
            draf.counter -= 1 ;
            break
        default:
           break;
    }
});

export default counter;
