import './VideoItem.css';
import React from 'react';

const VideoList = ({ video, onVideoSelect }) =>{
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img className="ui image" alt="video thumbnail" src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">{video.snippet.channelTitle}</div>
                <div className="description">{video.snippet.title}</div>
            </div>
        </div>
    );
}

export default VideoList;