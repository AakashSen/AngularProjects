import { CartActions, CartActionTypes } from './actions';

export let initialstate = [];
export function reducer(state=initialstate, action: CartActions){

    switch(action.type) {

        case CartActionTypes.ADD_PRODUCT:
            return [...state, action.payload];
        case CartActionTypes.REMOVE_PRODUCT:
            let product = action.payload;
            return state.filter(el => el.id != product.id)
        default:
           return state

    }

}