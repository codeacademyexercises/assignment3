import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Library from './Components/Library/Library';
const axios = require('axios');

let GetBooks =async()=> await axios.get('http://localhost:3005/BooksWithRatings').then((response)=> response.data);
class App extends Component {
  state={
    InitialState: null,
  }
  async componentDidMount(){
    await GetBooks().then((data)=> {for(var property in data){
      data[property].forEach((book)=>{
        book['like']=false;
      });
      this.props.InitializeState(data);
    };return data;}).then((data)=> {this.setState({InitialState: data}); return data;}).then((data)=>{ console.log(data);});
    }
 render() {
    return (
      <div className="WholeLibrary">
        <Header />
        <Library books={this.state.InitialState}/>
      </div>
    );
  }
}

export default App;
