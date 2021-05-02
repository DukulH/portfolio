import React from 'react';
import "./Blog.css";
const Blog = () => {
    return (

        <div className="text-center blogStyle" >
            <h1 className=" underLineStyle" style={{ color: '#072936' }}>BL<span style={{ color: '#E04343' }}>OG</span>S</h1>
            <div className="shadow">
                <svg viewBox="0 0 1450 600">
                    <text x="50%" y="50%" fill="transparent" textAnchor="middle">
                        Coming Soon...
               </text>
                </svg>
            </div>
        </div>
    );
};

export default Blog;