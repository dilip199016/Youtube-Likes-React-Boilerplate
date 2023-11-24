import React, { useState } from 'react';
import '../styles/App.css';
import like from '../like.svg';

const App = () => {
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('rgba(255, 0, 0, 0)');

  const handleLikeClick = () => {
    setCount(count + 1);
    const opacity = Math.min(1, (count + 1) * 0.1); // Ensure opacity doesn't exceed 1
    setBackgroundColor(`rgba(255, 0, 0, ${opacity})`);
  };

  return (
    <div id="main">
      <img
        id="like-btn-img"
        src={like}
        alt="Like Button"
        style={{ fill: 'white', width: '100px', backgroundColor }}
        onClick={handleLikeClick}
      />
      <h3>
        Likes: <span id="like-counter">{count}</span>
      </h3>
    </div>
  );
};

export default App;
