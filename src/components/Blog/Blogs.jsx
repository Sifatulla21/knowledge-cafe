import React, { useEffect, useState } from 'react';
import BookmarkAdded from '../Added Bookmark/BookmarkAdded';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from '../Card/Card'
import Blog from './Blog';
import './Blogs.css'
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);
    const [times, setTime] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, []);
    const handleTime = (blog) => {
        const newTimes = [...times, blog];
        setTime(newTimes);
    }
    const handleBookmark = (blog) => {
        const newBookmarks = [...bookmarks, blog];
        setBookmarks(newBookmarks);
        for(const bm of bookmarks){
            if(bm.id === blog.id){
                showToastMessage();
                break;
            }
        }
    }
    let totalTime = 0;
    for (const time of times) {
        totalTime = totalTime + time.time;
    }
    const showToastMessage = () => {
        toast.warning('You Have Already Bookmarked This Blog', {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    return (
        <div className="blogArea">
            <div className="blogCard">
                {
                    blogs.map(blog => <Card
                        key={blog.id}
                        blog={blog}
                        handleTime={handleTime}
                        handleBookmark={handleBookmark}
                    ></Card>
                    )
                }
            </div>
            <div className="blogName">
                <div className="spentTime">
                    <h2>Spent time on read : {totalTime} min</h2>
                </div>
                <div className="bookmarksBlogs">
                    <h2>Bookmarked Blogs : {bookmarks.length}</h2>
                    {
                        bookmarks.map(addedBookmark => <BookmarkAdded
                            key={addedBookmark.id}
                            addedBookmark={addedBookmark}
                        ></BookmarkAdded>
                        )
                    }
                </div>
            </div>
            <div>
                <Blog></Blog>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Blogs;