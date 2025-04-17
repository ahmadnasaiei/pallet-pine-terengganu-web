import { Action } from "redux";
import { ActionTypes } from "../constants/action-types"

const INITIAL_STATE = {
    product: [
        {
            id: 1,
            title: "Barn Door",
            category: "Door",
        },
        {
            id: 2,
            title: "Kitchen Island",
            category: "Kitchen Cabinet",
        },
        {
            id: 3,
            title: "Kitchen Counter Top",
            category: "Kitchen Cabinet",
        },
        {
            id: 4,
            title: "Wooden Door",
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