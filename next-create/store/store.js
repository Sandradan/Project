import {createStore, combineReducers} from 'redux'

const initialState = {
    count:  0
}
const ADD = 'ADD'
function counterReducer(state = initialState, action){
    console.log(state, action)
    switch (action.type) {
        case ADD:
            return { count: state.count + 1 }
        default:
            return state
    }
}

const userInitialState ={
    username: 'jocky'
}

const UPDATE_USERNAME = 'UDATE_USERNAME'
function userReducer(state = userInitialState, action){
    switch(action.type){
        case UPDATE_USERNAME:
            return {
                ...state,
                username: action.name
            }
        default:
            return state
    }
}
const allReducers = combineReducers({
    counter: counterReducer,
    user: userReducer
})
const store = createStore(allReducers, {
    counter: initialState,
    user: userInitialState
})
// console.log(store.getState())

store.dispatch({type: ADD})
// console.log(store.getState())
store.subscribe(() =>{
    console.log('changed', store.getState()) //每次数据变更后调用
})
store.dispatch({type: ADD})
store.dispatch({type: UPDATE_USERNAME, name: 'lilei'})
export default store