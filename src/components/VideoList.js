import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
  const videoItems = props.videos.map((element) => {
    return (
      <VideoListItem
        key={element.etag}
        video={element}
        onVideoSelection={props.onVideoSelect} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;
