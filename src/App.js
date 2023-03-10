import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommentsList from './components/CommentsList';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://nolood.github.io/interactive-comment-section/data.json');
        setData(response.data)
      } catch (error) {
        console.log(error)
      }
    };
    fetchData();
  }, [])
  useEffect(() => {
    if (data.length > 0){
      localStorage.setItem('data-comments', data)
    }
  }, [data])

  return (
    <div className='App'>
      <CommentsList/>
    </div>
  );
};

export default App;