import React, { Component } from 'react';
import './Header.css';

class Header extends Component{
    render(){
        return(
            <header className="header">
                <span>BS</span>
                <div className="HorizontalLine">
                    <hr />
                    <hr />
                </div>
                <span>The Book Shelf</span>
            </header>
        );
    }
}

export default Header;