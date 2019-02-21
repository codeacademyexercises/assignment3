import React, { Component } from 'react';
import './Header.css';

class Header extends Component{
    render(){
        return(
            <header className="header">
                <span className="Logo">BS</span>
                <div className="HorizontalLine">
                    <hr />
                    <hr />
                </div>
                <span className="Title">The Book Shelf</span>
            </header>
        );
    }
}

export default Header;