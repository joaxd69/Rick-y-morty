import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from '../reducer/Reducer'

const store = createStore(reducer,composeWithDevTools(),applyMiddleware(thunk))

store.subscribe(()=>{
    console.log(store.getState());
})

export default store