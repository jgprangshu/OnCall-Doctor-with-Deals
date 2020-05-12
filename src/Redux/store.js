import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import homeReducer from './reducers/homeReducer'
import authReducer from './reducers/authReducer'
import couponReducer from './reducers/couponReducer'
import doctorReducer from './reducers/doctorReducer'
import adminReducer from './reducers/adminReducer'

const saveToLocalStorage =(state)=>{
    try{
        console.log(state.authReducer)
        let serializedState = JSON.stringify(state)
        localStorage.setItem("currentUser",serializedState)
    }
    catch(e){
        console.log(e)
    }
}

const loadFromLocalStorage = ()=>{
    try{
        let serializedState = localStorage.getItem('currentUser')
        if(serializedState === null) return undefined
        return JSON.parse(serializedState)
    }
    catch(e){
        console.log(e)
        return undefined
    }
}

const rootReducer = combineReducers({homeReducer,authReducer,couponReducer,doctorReducer,adminReducer})

const persistedState = loadFromLocalStorage()

const store = createStore(rootReducer,persistedState,applyMiddleware(thunk))

store.subscribe(() =>saveToLocalStorage(store.getState()))

export default store;
