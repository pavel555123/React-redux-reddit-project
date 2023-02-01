import {useEffect, useState} from 'react';
import './main.global.css';
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {useToken} from "./hooks/useToken";
import {tokenContext} from "./shared/context/tokenContext";
import {UserContextProvider} from "./shared/context/userContext";

import {applyMiddleware, createStore} from "redux";
import {Provider} from 'react-redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Post} from "./shared/Post";
import {rootReducer} from "./store";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

function AppComponent() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true)
    }, [])
    // useEffect(() => {
    //     const token = localStorage.getItem('token') || window.__token__;
    //     store.dispatch(setToken(token));
    //     if (token) {
    //     }
    //     localStorage.setItem('token', token);
    // }, []);

    const [token] = useToken();
    const TokenProvider = tokenContext.Provider;

    return (
        <Provider store={store}>
            {mounted && (
                <BrowserRouter>
                    <TokenProvider value={token}>
                        <UserContextProvider>
                            <Layout>
                                <Header/>
                                <Content>
                                    <CardsList/>
                                    <Routes>
                                        <Route path='/' element={<Layout/>}/>
                                        <Route path='posts/:id' element={<Post/>}/>
                                    </Routes>
                                </Content>
                            </Layout>
                        </UserContextProvider>
                    </TokenProvider>
                </BrowserRouter>
            )}
        </Provider>
    );
}

export const App = hot(() => <AppComponent/>);

