import React from 'react';
import ReactPlayer from './react_app/node_modules/react-player';

const PlayerPage = () => {
  const youtubeUrl = 'https://www.youtube.com/watch?v=bMknfKXIFA8';

  return (
    <div>
      <h1>Player Page</h1>
      <ReactPlayer url={youtubeUrl} controls />
    </div>
  );
};

export default PlayerPage;