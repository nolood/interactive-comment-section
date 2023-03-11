import React, { useState, useEffect } from 'react';

const ReplyComment = ({currentComment, currentCommentText, globalData, width}) => {

  const [imagePath, setImagePath] = useState('');
  const [commentText, setCommentText] = useState(`@${currentCommentText.user.username}, `)

  useEffect(() => {
    const getImagePath = async () => {
      const imageData = await import(`./../assets/${globalData.currentUser.image.png.slice(2)}`);
      setImagePath(imageData.default);
    };
    globalData && getImagePath();
  }, [globalData]);

  const replyComment = () => {
    const comment = globalData.comments.find((c) => c.id === currentComment.id)
    const newReply = {
      id: Date.now(), 
      content: commentText,
      createdAt: '1 minute ago',
      score: 0,
      replyingTo: currentComment.user.username,
      user: {
        image: {
          png: globalData.currentUser.image.png
        },
        username: globalData.currentUser.username
      }
    }
    comment.replies.push(newReply)
    localStorage.setItem('data-comments', JSON.stringify(globalData))
    window.location.reload()
  }
  return (
    <div style={{width: `${width}%`}} className='replycomment__wrapper'>
      <img className='currentuser-avatar' src={imagePath} alt="" />
      <textarea value={commentText} onChange={e => setCommentText(e.target.value)} className='comment-text'></textarea>
      <button onClick={() => replyComment()} className='send'>reply</button>
    </div>
  );
};

export default ReplyComment;