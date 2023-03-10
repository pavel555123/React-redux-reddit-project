import {ActionCreator, Reducer} from "redux";
import {
    ME_REQUEST,
    ME_REQUEST_ERROR,
    ME_REQUEST_SUCCESS,
    MeRequestAction,
    MeRequestErrorAction,
    MeRequestSuccessAction
} from "./me/actions";
import {meReducer, MeState} from "./me/reducer";

const UPDATE_COMMENT = 'UPDATE_COMMENT';
const SET_TOKEN = 'SET_TOKEN';

export type RootState = {
    commentText: string;
    token: string;
    me: MeState;
}

const initialState: RootState = {
    commentText: 'Hello',
    token: '',
    me: {
        loading: false,
        error: '',
        data: {}
    },
}

type UpdateCommentAction = {
    type: typeof UPDATE_COMMENT;
    text: string;
}

type SetTokenAction = {
    type: typeof SET_TOKEN;
    token: string;
}

export const updateComment: ActionCreator<UpdateCommentAction> = (text: string) => ({type: UPDATE_COMMENT, text})
export const setToken: ActionCreator<SetTokenAction> = (token: string) => ({type: SET_TOKEN, token})

type MyAction = UpdateCommentAction
    | SetTokenAction
    | MeRequestAction
    | MeRequestSuccessAction
    | MeRequestErrorAction;

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.text
            }
        case SET_TOKEN:
            return {
                ...state,
                token: action.token
            }
        case ME_REQUEST:
        case ME_REQUEST_SUCCESS:
        case ME_REQUEST_ERROR:
            return {
                ...state,
                me: meReducer(state.me, action)
            };
        default:
            return state;
    }
}

// import {ActionCreator, AnyAction, Reducer} from "redux";
// import {
//     ME_REQUEST,
//     ME_REQUEST_ERROR,
//     ME_REQUEST_SUCCESS,
//     MeRequestAction,
//     MeRequestErrorAction,
//     MeRequestSuccessAction
// } from "./me/actions";
// import {meReducer, MeState} from "./me/reducer";
// import {TOKEN_REQUEST, TOKEN_REQUEST_ERROR, TOKEN_REQUEST_SUCCESS} from "./token/actions";
// import {tokenReducer, TokenState} from "./token/reducer";
// const UPDATE_COMMENT = 'UPDATE_COMMENT';
//
// export type RootState = {
//     commentText: string;
//     token: TokenState;
//     me: MeState;
// }
//
// const initialState: RootState = {
//     commentText: '????????????, Skillbox!',
//     token: {
//         loading: false,
//         error: '',
//         token: '',
//     },
//     me: {
//         loading: false,
//         error: '',
//         data: {}
//     }
// }
//
// export const updateComment: ActionCreator<AnyAction> = (text) => ({
//     type: UPDATE_COMMENT,
//     text
// });
//
// type MyAction = MeRequestAction | MeRequestErrorAction | MeRequestSuccessAction;
//
// export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
//     switch (action.type) {
//         case UPDATE_COMMENT:
//             return {
//                 ...state,
//                 commentText: action.text,
//             };
//         case TOKEN_REQUEST:
//         case TOKEN_REQUEST_SUCCESS:
//         case TOKEN_REQUEST_ERROR:
//             return {
//                 ...state,
//                 token: tokenReducer(state.token, action),
//             }
//         case ME_REQUEST:
//         case ME_REQUEST_SUCCESS:
//         case ME_REQUEST_ERROR:
//             return {
//                 ...state,
//                 me: meReducer(state.me, action),
//             }
//         default:
//             return state;
//     }
// }
