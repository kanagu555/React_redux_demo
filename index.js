const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combainReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAMS = 'BUY_ICECREAMS'

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'My First Redux Action'
    }
}

function buyIceCreams() {
    return {
        type: BUY_ICECREAMS,
        info: 'My Second Redux Action'
    }
}


// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE:
//             return {
//                 ...state, 
//                 numOfCakes: state.numOfCakes - 1
//             }
//         case BUY_ICECREAMS:
//             return {
//                 ...state,
//                 numOfIceCreams: state.numOfIceCreams - 1
//             }
//             default:
//             return state
//     }
// }


const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state, 
                numOfCakes: state.numOfCakes - 1
            }
        
            default:
            return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
       
        case BUY_ICECREAMS:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
            default:
            return state
    }
}

const rootReducer = combainReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial State', store.getState());
const unSubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCreams())
store.dispatch(buyIceCreams())
unSubscribe()