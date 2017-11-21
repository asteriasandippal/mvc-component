import {INCREMENT_COUNT} from './../constances';


export function increment(state = [], action) {
    switch(action.type) {
        case INCREMENT_COUNT:
            console.log(action.num);
            return action.num;
        default:
            return state;
    }
}
