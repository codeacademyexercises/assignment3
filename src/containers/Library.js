import {
    ToggleLike,
    InitialiseState,
} from '../actions/actions';
import { connect } from 'react-redux';
import Library from '../Components/Library/Library';

const mapStatetoProps = (state, ownProps)=>{
    return {
        books: state,
    }
}

const mapDispatchtoProps = (dispatch, ownProps)=>{
    return {
        initialState: ()=> dispatch(InitialiseState(ownProps.InitialState)),
    }
}

export default connect(
    mapStatetoProps,
    mapDispatchtoProps,
)(Library);