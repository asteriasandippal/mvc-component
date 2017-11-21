import {INCREMENT_COUNT} from './../constances';

export function incrementCount(num) {
    console.log(num);
    return {
        type: INCREMENT_COUNT,
        num
    }
}
