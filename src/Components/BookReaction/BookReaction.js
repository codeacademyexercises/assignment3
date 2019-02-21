import React,{ Component } from 'react';
import './BookReaction.css';

class BookReaction extends Component {
    likeToggle = ()=>{
        this.props.toggleLike()
    }
    render(){
        let icon;
        if(this.props.like===true){
            icon='heart-red.svg';
        }else{
            icon='heart-black.svg';
        }
        return(
            <div className="BookReaction">
                <div className="BookRating">
                    {this.props.bookinfo.rating}
                </div>
                <div className="ImageContainer">
                    <img className="Image" alt='' src={require(`/Users/Chirag_Ramachandraiah/ReactProjects/assignment3/my-app/src/Icons/${icon}`)} onClick={this.likeToggle}/>
                </div>
            </div>
        );
    };
};

export default BookReaction;
