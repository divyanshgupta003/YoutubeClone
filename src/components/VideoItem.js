import React from "react";

import {Paper , Grid , Typography} from '@material-ui/core';

const videoItem = ({video , onVideoSelect})=>{
    return (
        <Grid item xs={12}>
            <Paper style={{display : "flex" , alignItems : "center" , cursor:"pointer"}} onClick={()=>onVideoSelect(video)}>
                <img width="40%" style={{marginRight : '20px'}} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
                <Typography variant='subtitle2'><b>{video.snippet.title} </b></Typography>
            </Paper>
        </Grid>
    )
}

export default videoItem;