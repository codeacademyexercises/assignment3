import React, { Component } from 'react';
import Book from '../Book/Book';
import './BookByAuthor.css';

class BookByAuthor extends Component {
    render(){
        let display=[];
        this.props.InitialState.forEach((book, index)=>{
            display.push(<Book className="Book" bookinfo={book}/>);
        });
        return(
            <div className="BookByAuthor">
                <h1>{this.props.author}</h1>
                <div className="Books">
                    {display}
                </div>
            </div>
        );
    };
};

export default BookByAuthor;