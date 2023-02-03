import {useContext, useEffect} from "react";
// import {tokenContext} from "../shared/context/tokenContext";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/reducer";
import {IUserData, meRequestAsync} from "../store/me/actions";

export function useUserData() {
    const data = useSelector<RootState, IUserData>(state => state.me.data);
    const loading = useSelector<RootState, boolean>(state => state.me.loading);
    // const token = useContext(tokenContext);
    const token = useSelector<RootState>(state => state.token);
    const dispatch = useDispatch();
    // console.log(token)

    useEffect(() => {
        if (!token) return;
        console.log(token)
        dispatch(meRequestAsync());
    }, [token])

    return {data, loading}
}
