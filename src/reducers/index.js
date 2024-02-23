import {legacy_createStore as createStore} from "redux"

// create store is deprecated
// We recommend using the configureStore method of the @reduxjs/toolkit package, which replaces createStore.
// Redux Toolkit is our recommended approach for writing Redux logic today, including store setup, reducers, data fetching, and more.
// For more details, please read this Redux docs page: https://redux.js.org/introduction/why-rtk-is-redux-today
// configureStore from Redux Toolkit is an improved version of createStore that simplifies setup and helps avoid common bugs.
// You should not be using the redux core package by itself today, except for learning purposes. The createStore method from the core redux package will not be removed, but we encourage all users to migrate to using Redux Toolkit for all Redux code.



// a reducer is a function that takes in two arguments (state, action) => newState
// 1. the state of the world i.e a javascript object that represents everything happening in an application
// 2. the the thing that happened (a button click, api response etc)
// and returns a new state of the world
// sometimes it doesn't affect our application

// app initial state 
const initialState = { count: 0};

// convention is to store action types in a constant due to spelling errors
const INCREMENT = "INCREMENT" // can be any string 
const ADD = "ADD" // can be any string 

// create an action 
// the only requirement is that there is a "type" key in the object
// can also have a payload
const incrementAction = { type: INCREMENT}

// action creator
const additionActionCreator = (value) => ({type: ADD, payload: value})


// create a reducer
const reducer = (state = initialState, action) => {
    
    if (action.type === INCREMENT) {
        return {count: state.count + 1}
    }
    if (action.type === ADD) {
        return {count: state.count + action.payload}
    }
    return state; // always return the default state if nothing happened (no change).
}

// create a store
const store = createStore(reducer)
store.dispatch(incrementAction)
store.dispatch(additionActionCreator(5))
console.log(store.getState()) // {count: 5}