import {intialState} from '../intial-state';

export const counterReducer = (state=intialState.counter,action)=>{
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + 1
            }
            case 'decrement':
                return {
                    ...state,
                    count: state.count - 1
                }
        default:
            return state
    }
}