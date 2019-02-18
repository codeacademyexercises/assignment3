import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Library from './containers/Library';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import stateUpdate from './reducers/reducers';
const store = createStore(stateUpdate,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const axios = require('axios');

let GetBooks =async()=> await axios.get('http://localhost:3005/BooksWithRatings').then((response)=> response.data);
class App extends Component {
  state={
    InitialState: null,
  }
  componentWillMount(){
    GetBooks().then((data)=>{this.setState({InitialState: data})})
  }
 render() {
    return (
      <div className="WholeLibrary">
        <Header />
        <Provider store={store}>
          <Library InitialState={this.state.InitialState}/>
        </Provider>
      </div>
    );
  }
}

export default App;
