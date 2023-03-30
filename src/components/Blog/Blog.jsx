import React, { useEffect, useState } from 'react';
import Card from '../Card/Card'
import './Blog.css'
const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    }, []);
    return (
        <div className="blogArea">
            <div className="blogCard">
                {
                blogs.map(blog => <Card
                key={blog.id}
                blog={blog}
                ></Card>)
                }
            </div>
            <div className="blogName">
                <h1>Bookmarked Blogs :</h1>
            </div>
        </div>
    );
};

export default Blog;