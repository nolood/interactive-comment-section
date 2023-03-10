import React, { useEffect, useState } from 'react';
import AddComment from './AddComment';
import Comment from './Comment';

const CommentsList = () => {
  
  const [data, setData] = useState()
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('data-comments')))
  }, [])
  
  return (
    <section className='section'>
      <div className='container comments__wrapper'>
        {data && data.comments.map((item) => <Comment key={item.id} data={item} currentUser={data.currentUser} globalData={data}/>)}
        <AddComment data={data}/>
      </div>

    </section>
  );
};

export default CommentsList;