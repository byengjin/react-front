import {combineReducers, legacy_createStore as createStore} from 'redux'
import userReducer from './reduces/user'
import {persistStore, persistReducer} from 'redux-persist';
// 세션 저장소 사용 시
import storage from 'redux-persist/lib/storage/session';


const persistConfig={
    key:'root',
    storage,
}

const allReducers=combineReducers({
    user:userReducer
})

const persistedReducer=persistReducer(persistConfig, allReducers);
const store=createStore(persistedReducer);

export const persistor=persistStore(store);
export default store;