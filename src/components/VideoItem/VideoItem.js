import React from "react";

import Aux from '../../Hoc/auxlliary';

import './VideoItem.modules.css';

const videoItem = ({video , onVideoSelect})=>{
    return (
        <Aux>
            <div className='VideoItemContainer'>
            <img alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
            <div className="VideoItemDetails">
                <h5>{video.snippet.title} </h5>
                <p>{video.snippet.channelTitle} </p>
            </div>
            </div>
        </Aux>
    )
}

export default videoItem;