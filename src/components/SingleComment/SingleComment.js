import React from 'react';
import classes from './SingleComment.module.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import parse from 'html-react-parser';

const SingleComment = (props)=>{
    // const domparser = new DOMParser()​​;
    // let author = domparser.parseFromString(props.author , 'text/html');
    // let comment = domparser.parseFromString(props.comment , 'text/html');
    return(
        <div className={classes.SingleComment}>
            <p><b>{parse(props.author)}</b></p>
            <p>{parse(props.comment)}</p>
            <div className={classes.SingleCommentLikeDislike}>
                <ThumbUpAltIcon stye={{fontSize : 10}} /> {props.likes}
            </div>
            <br />
        </div>
    )
}

export default SingleComment;