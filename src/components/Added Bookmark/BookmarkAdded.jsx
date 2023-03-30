import React from 'react';
import './BookmarkAdded.css'
const BookmarkAdded = (props) => {
    const {title} = props.addedBookmark;
    return (
        <div>
            <h2 className="addedBookmarks">{title}</h2>
        </div>
    );
};

export default BookmarkAdded;