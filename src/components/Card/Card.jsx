import React from 'react';
import './Card.css'
const Card = (props) => {
    console.log(props);
    const {cover,time,title,userName,userPicture} = props.blog;
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
                    <p>{time} min read</p>
                </div>
            </div>
            <h1>{title}</h1>
            <a href="">mark as read</a>
        </div>
    );
};

export default Card;