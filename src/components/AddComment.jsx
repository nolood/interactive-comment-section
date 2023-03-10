import React, { useState, useEffect } from 'react';

const AddComment = ({data}) => {

  const [imagePath, setImagePath] = useState('');

  useEffect(() => {
    const getImagePath = async () => {
      const imageData = await import(`./../assets/${data.currentUser.image.png.slice(2)}`);
      setImagePath(imageData.default);
    };
    data && getImagePath();
  }, [data]);

  return (
    <div className='addcomment__wrapper'>
      <img className='currentuser-avatar' src={imagePath} alt="" />
      <textarea className='comment-text' placeholder='Add a comment...'></textarea>
      <button className='send'>Send</button>
    </div>
  );
};

export default AddComment;