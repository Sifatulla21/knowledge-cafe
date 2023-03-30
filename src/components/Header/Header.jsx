import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className="headerMain">
                <h3>Knowledge Hub</h3>
                <div className="links">
                    <a href="#">Blogs</a>
                    <a href="#">Reviews</a>
                    <a href="#">Bookmarks</a>
                    <a href="#">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Header;