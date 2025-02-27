// AuthContext.js

import { createContext, useEffect, useReducer } from "react";

const initial_state ={
    user: localStorage.getItem('user') !== undefined? JSON.parse(localStorage.getItem('user')): null,
    loading:false,
    error: null,
};

export const AuthContext = createContext(initial_state);

const AuthReducer =(state, action) => {
    switch(action.type){
        case 'LOGIN_START':
            return {
                user: null,
                loading: false,
                error:null,
            };
        case 'Login_Success' :
            return {
                user: action.payload,
                loading: false,
                error: null
            };
        case 'Login-Failure' :
            return {
                user: null,
                loading: false,
                error: action.payload
            };
        case 'Register_success' :
            return {
                user: null,
                loading: false,
                error: null
            };
        case 'Logout' :
            return {
                user: null,
                loading: false,
                error: null
            };
        default:
            return state;
    }
};

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, initial_state);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user));
    }, [state.user]);

    return (
        <AuthContext.Provider value={{
            user: state.user,
            loading: state.loading,
            error: state.error,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    );
};
