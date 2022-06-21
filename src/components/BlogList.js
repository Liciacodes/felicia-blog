import React from "react";
import { Link } from "react-router-dom";
;

const BlogList = ({id,body,title,author, handleDelete }) => {
  return (
    <main className="main">
     <Link to= {`/blog/${id}`}>
     <p className='title'>{title}</p>
     <p className='title'>By {author}</p></Link>
      <button 
      onClick={() => handleDelete(id)}>
        delete blog
        </button>
    </main>
  );
};

export default BlogList;
