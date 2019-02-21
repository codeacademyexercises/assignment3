import { connect } from 'react-redux';
import BookReaction from '../Components/BookReaction/BookReaction';
import {
    ToggleLike,
} from '../actions/actions';

const mapStatetoProps = (state, ownProps)=>{
    console.log(ownProps.bookinfo.Author,state);
    return {
        like: state[ownProps.bookinfo.Author][ownProps.index].like,
    }
}
const mapDispatchtoProps = (dispatch,ownProps)=>{
    console.log(ownProps);
    return {
        toggleLike: ()=> dispatch(ToggleLike(ownProps.index,ownProps.bookinfo.Author))
    }
}

export default connect(
    mapStatetoProps,
    mapDispatchtoProps,
)(BookReaction);