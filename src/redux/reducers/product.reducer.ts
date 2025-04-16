import { Action } from "redux";
import { ActionTypes } from "../constants/action-types"

const INITIAL_STATE = {
    product: [
        {
            id: 1,
            title: "Barn Door",
            category: "Door",
        },
    ],
};

interface productAction extends Action {
    payload: string | any;
    data: string | any;
}

export const productReducer = (state = INITIAL_STATE, action: productAction) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
};