// import {useEffect, useState} from "react";
// import {RootState, setToken} from "../store/reducer";
// import {useDispatch, useSelector} from "react-redux";
//
// export function useToken() {
//     const dispatch = useDispatch();
//     // dispatch(setToken(window.__token__))
//     // return window.__token__
//
//     // useEffect(() => {
//     //     if (window.__token__) {
//     //         // dispatch(setToken(window.__token__))
//     //     }
//     // }, [])
//     // const token = useSelector<RootState>(state => state.token);
//     //
//     // return [token]
// }


// import {useEffect} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {RootState, setToken} from "../store/reducer";
// import {tokenRequestAsync} from "../store/token/actions";
// import {useNavigate} from "react-router-dom";
//
// export function useToken() {
//     const token = useSelector<RootState, string>(state => state.token);
//     const history = useNavigate();
//     const dispatch = useDispatch();
//
//     useEffect(() => {
//         if (token) {
//             dispatch(setToken(token));
//         }
//     }, [token]);
//
//     return [token]
// }

// import {setToken} from "../store/reducer";
// import {useDispatch} from "react-redux";
//
//
// const dispatch = useDispatch();
// export function useToken() {
//     const token = window.__token__;
// // console.log(token, window.__token__)
//     dispatch(setToken(token));
// }





