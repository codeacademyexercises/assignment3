import { connect } from 'react-redux';
import {
    InitialiseState,
} from '../actions/actions';
import App from '../App';

const mapDispatchtoProps = (dispatch)=>{
    return{
        InitializeState: (InitialState)=> dispatch(InitialiseState(InitialState))
    }
}

export default connect(
    null,
    mapDispatchtoProps,
)(App);