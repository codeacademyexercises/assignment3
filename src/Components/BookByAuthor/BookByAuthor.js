import React, { Component } from 'react';
import Book from '../Book/Book';
import './BookByAuthor.css';

class BookByAuthor extends Component {
    render(){
        let display=[];
        this.props.InitialState.forEach((book, index)=>{
            display.push(<Book index={index} bookinfo={book}/>);
        });
        return(
            <div className="BookByAuthor">
                <div className="Author">{this.props.author}</div>
                <div className="Books">
                    {display}
                </div>
            </div>
        );
    };
};

export default BookByAuthor;