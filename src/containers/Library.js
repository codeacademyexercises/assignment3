// import {
//     InitialiseState,
// } from '../actions/actions';
import { connect } from 'react-redux';
import Library from '../Components/Library/Library';

const mapStatetoProps = (state, ownProps)=>{
    return {
        books: state,
    }
}

// const mapDispatchtoProps = (dispatch, ownProps)=>{
//     return {
//         InitializeState: ()=> dispatch(InitialiseState(ownProps.books)),
//     }
// }

export default connect(
    mapStatetoProps,
    // mapDispatchtoProps,
)(Library);