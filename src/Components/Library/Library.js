import React, { Component } from 'react';
import BookByAuthor from '../BookByAuthor/BookByAuthor';
import './Library.css';

class Library extends Component {
    render(){
        let display=[];
        for(let property in this.props.books){
            display.push(<BookByAuthor className="BookByAuthor" InitialState={this.props.books[property]} author={property}/>);
        }
        return(
            <div className="Library">
                {display}
            </div>
        );
    };
};

export default Library;