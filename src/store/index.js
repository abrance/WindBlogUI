import {createStore} from "redux";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { appReducer } from "./reducer";
const key = 'root';
const persistAppReducer = persistReducer(
    {
        key,
        storage
    },
    appReducer)
const appStore = createStore(persistAppReducer)
const persistor = persistStore(appStore)
export {appStore, persistor};
