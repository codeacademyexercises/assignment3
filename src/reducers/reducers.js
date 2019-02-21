import {
    LIKE_TOGGLE,
    INITIALIZE_STATE,
} from '../actions/actions';

const stateUpdate = (state={}, action)=>{
    let author={};
    switch(action.type){
        case LIKE_TOGGLE:
        console.log(action.index,action.author);
            author[action.author]=state[action.author].map((book,index)=>{
                if(index===action.index){
                    return Object.assign({},book,{like: !book.like})
                }
                return book
            })
            console.log(Object.assign({},state,author));
            return Object.assign({},state,author)
        case INITIALIZE_STATE:
            console.log('before initialize',action.InitialState)
            return action.InitialState
        default: 
            return state
    }
}

export default stateUpdate;