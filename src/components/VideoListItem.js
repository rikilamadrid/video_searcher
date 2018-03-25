import React from 'react';

const VideoListItem = ({ video, onVideoSelection }) => {
  const imgUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;

  return (
    <li onClick={() => onVideoSelection(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imgUrl} />
          <img className="play" src="http://cdn1.iconfinder.com/data/icons/flavour/button_play_red.png" />
        </div>

        <div className="media-body">
          <div className="media-heading">
            {title}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
