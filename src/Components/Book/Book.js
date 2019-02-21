import React, { Component } from 'react';
import BookReaction from '../../containers/BookReaction';
import './Book.css';

class Book extends Component {
    render(){
        let background='background1';
        if(this.props.index%2===1){
            background='background2';
        }
        return(
            <div className={background}>
                <div className="ImageContainer">
                    <img  className="image" alt='' src={require('../../images/cover_image.jpeg')} />
                </div>
                <div className="BookInfo">
                    <div className="BookName">
                        {this.props.bookinfo.Name.toUpperCase()}
                    </div>
                    <BookReaction bookinfo={this.props.bookinfo} index={this.props.index}/>
                </div>
            </div>
        );
    };
};

export default Book;