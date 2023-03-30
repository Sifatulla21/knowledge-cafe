import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'
import './Card.css'
const Card = (props) => {
    const {cover,time,title,userName,userPicture} = props.blog;
    const handleBookmark = props.handleBookmark;
    return (
        <div className="cardBody">
            <img className="cardCover" src={cover} alt="" />
            <div className="cardUser">
                <div className="userInfo">
                    <div>
                    <img className="userImage" src={userPicture} alt="" />
                    </div>
                    <div>
                        <h5>{userName}</h5> 
                        <p>Mar 14 (4 Days ago)</p>
                    </div>
                </div>
                <div className="timeRead">
                    <p>{time} min read<a onClick={()=>handleBookmark(props.blog)} href="#"><FontAwesomeIcon icon={faBookBookmark}/></a></p>
                </div>
            </div>
            <h1>{title}</h1>
            <a href="">mark as read</a>
        </div>
    );
};

export default Card;