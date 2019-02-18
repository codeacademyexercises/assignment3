import React, { Component } from 'react';
import './Book.css';

class Book extends Component {
    render(){
        return(
            <div className="Book">
                    <img  className="image" alt='' src={require('../../images/cover_image.jpeg')} />
                <div className="BookInfo">
                    {this.props.bookinfo.Name}
                </div>
                <div className="BookInfo">
                    {this.props.bookinfo.rating}
                </div>
            </div>
        );
    };
};

export default Book;