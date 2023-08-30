import React from 'react';
import Blogitem from './Blogitem';
import './styles.css';

const BlogList = ({ blogs }) => {
  return (
    <div className='blogList-wrap'>
      {blogs.map((blog) => (
        <Blogitem blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;