const initial = 0;
const count = (state=initial,action) => {
    switch(action.type){
        case 'INCREMENT':
            return state+1
        case 'DECREMENT':
            return state-1
        default:
    }
}

export default count;