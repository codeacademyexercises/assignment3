export const LIKE_TOGGLE="LIKE_TOGGLE";
export const INITIALIZE_STATE="INITIALIZE_STATE";
export const ToggleLike = (index,author)=>{
    return {
        type: LIKE_TOGGLE,
        index,
        author,
    }
}

export const InitialiseState = (InitialState)=>{
    return {
        type: INITIALIZE_STATE,
        InitialState,
    }
}