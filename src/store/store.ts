//@ts-ignore
import {createStore} from 'redux'

function reducer(state=0, action: string): void {
    console.log(state, action)
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(reducer)

