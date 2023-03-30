import React, { useEffect, useState } from 'react';
import BookmarkAdded from '../Added Bookmark/BookmarkAdded';
import Card from '../Card/Card'
import './Blogs.css'
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    }, []);
    const handleBookmark = (blog) =>{
       const newBookmarks = [...bookmarks,blog];
       setBookmarks(newBookmarks);
       console.log(bookmarks);
    }

    let totalTime = 0;
    for(const bookmark of bookmarks){
        totalTime = totalTime + bookmark.time;
    }
    return (
        <div className="blogArea">
            <div className="blogCard">
                {
                blogs.map(blog => <Card
                key={blog.id}
                blog={blog}
                handleBookmark={handleBookmark}
                ></Card>)
                }
            </div>
            <div className="blogName">
                <div className="spentTime">
                    <h3>Spent time on read : {totalTime} min</h3>
                </div>
                <div className="bookmarksBlogs">
                    <h1>Bookmarked Blogs : {bookmarks.length}</h1>
                    {
                        bookmarks.map(addedBookmark => <BookmarkAdded
                        key={addedBookmark.id}
                            addedBookmark={addedBookmark}
                        ></BookmarkAdded>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;