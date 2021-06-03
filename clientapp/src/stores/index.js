import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from "../reducers/index"
import thunk from 'redux-thunk';
const persistConfig = {
    key: 'root',
    storage,
    whitelist:[
        "user"
    ]
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const configureStore=()=>{
    
    return createStore(persistedReducer, applyMiddleware(thunk))
};

const store = configureStore();
const persistedStore = persistStore(store);


export  {store,persistedStore};
