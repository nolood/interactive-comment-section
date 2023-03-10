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

  const [commentText, setCommentText] = useState('');

  const sendComment = () => {
    const newComment = {
      id: Date.now(),
      content: commentText,
      createdAt: "1 minute ago",
      score: 0,
      user: {
        image: {
          png: `${data.currentUser.image.png}`,
        },
        username: data.currentUser.username,
      },
      replies: []
    }
    data.comments.push(newComment)
    const updatedData = JSON.stringify(data)
    localStorage.setItem('data-comments', updatedData)
    window.location.reload()
  }

  return (
    <div className='addcomment__wrapper'>
      <img className='currentuser-avatar' src={imagePath} alt=""/>
      <textarea value={commentText} onChange={e => setCommentText(e.target.value)} className='comment-text' placeholder='Add a comment...'></textarea>
      <button onClick={() => sendComment()} className='send'>Send</button>
    </div>
  );
};

export default AddComment;