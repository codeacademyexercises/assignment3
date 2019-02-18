import {
    LIKE_TOGGLE,
    INITIALIZE_STATE,
} from '../actions/actions';
// const axios = require('axios');
// let INITIAL_STATE;
// let GetBooks =async()=> await axios.get('http://localhost:3005/BooksWithRatings').then((response)=> response.data);

const stateUpdate = (state, action)=>{
    switch(action.type){
        case LIKE_TOGGLE:
            return Object.assign({},state,state.author.map((book,index)=>{
                if(index===action.index){
                    return Object.assign({},book,{like: !book.like})
                }
                return book
            }))
        case INITIALIZE_STATE:
            return action.InitialState
        default: 
            return state
    }
}

export default stateUpdate;