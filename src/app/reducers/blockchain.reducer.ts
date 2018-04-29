import { Blockchain } from './../blockchain/blockchain.model';
import { Action } from '@ngrx/store';

export const ADD_COIN = 'ADD_COIN';

export function addCoinReducer(state: Blockchain[] = [], 
    action) {

        console.log('reducer called/ period.');

        switch(action.type) {
            case ADD_COIN:
                console.log('reducer called for addcoin!!');
                return [...state, action.payload];
            default:
                console.log('default state called');
                return state;
        }
}