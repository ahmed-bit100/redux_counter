import count from '../reducer/count';
import {createStore} from 'redux'


const store = createStore(
    count,window.__REDUX_DEVTOOLS_EXTENSION__())


export default store;



