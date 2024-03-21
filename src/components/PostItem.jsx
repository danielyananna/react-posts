import React, { useState, useEffect } from 'react';

const PostItem = ({ post, setOpenModal, setItem}) => {

  const handleClick = (e, id) => {
    e.stopPropagation();
    
    if (id === post.id) {
      setOpenModal(true)
      setItem(post);
    }
  };

  return (
    <>
      {post && (
        <div className='post__item'>
          <div className='post__item-block' onClick={(e) => handleClick(e, post.id)}>
            <div className='post__item-inner'>
              <img className='post__item-img' src={post.img} alt={post.title}  srcSet={`${post.img} 1x, ${post.img_2x} 2x`} />
            </div>
            <div className='post__item-box'>
              <span className='post__item-desc'>{post.tags}</span>
              <h2 className='post__item-title'>{post.title}</h2>
              <div className='post__item-info'>
                <span className='post__item-data'>{post.autor}</span>
                <span className='post__item-data'>{post.date}</span>
                <span className='post__item-data'>{post.views}</span>
              </div>
              <p className='post__item-par'>{post.text}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostItem;
