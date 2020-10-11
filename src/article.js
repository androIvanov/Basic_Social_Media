import React from 'react';

function Article(props) {
    return (
        <div className="article">
            <div className="articleInfo">
                <span className="title">{props.title}</span>
                <span className="author">Posted by: <span className="authorName">{props.author}</span></span>
                <span className="category">In category: <span className="categoryName">{props.category}</span></span>
            </div>
            <p className="text">{props.text}</p>
        </div>
    );
}
export default Article;