import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware))); //91

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

type RootReducersType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducersType>;

// type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
// export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export default store;