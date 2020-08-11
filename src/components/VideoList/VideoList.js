import React from 'react';

import {Grid} from '@material-ui/core';
import {VideoItem} from '../index';
import Aux from '../../Hoc/auxlliary';
import './VideoList.modules.css';

const VideoList = (props)=>{
    const ListOfVideos = props.videos.map((video , id)=> <VideoItem onVideoSelect={props.onVideoSelect} key={id} video={video} />);
    return (
        <Aux>
            <div className="VideoList">
                {ListOfVideos}
            </div>
            
        </Aux>
    );
}

export default VideoList;    