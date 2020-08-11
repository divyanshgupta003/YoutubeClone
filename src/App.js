import React , {Component} from 'react';
import {Grid} from '@material-ui/core';

import {MenuBar , VideoDetail , VideoList} from './components/index';
import youtube from './api/youtube';

import './app.modules.css';

class App extends Component{
    state = {
        videos : [],
        selectedVideo : null
    }
    componentDidMount(){
        this.handleSubmit('latest');
    }
    handleSubmit = async (searchTerm)=>{
        const response = await youtube.get('search' , {
            params : {
                part : 'snippet',
                maxResults : 10,
                key : 'AIzaSyBIBEM4gHr9UnzurdaWljJhxzNWv2cSljA',
                q : searchTerm
            }
        });
        // console.log(response);
        this.setState({videos : response.data.items , selectedVideo : response.data.items[0]});
    }
    onVideoSelect = (video)=>{
        this.setState({selectedVideo : video});
    }
    render(){
        return(
            <div className="mainContainer">
                <div className="MenuBar">
                    <MenuBar onFormSubmit = {this.handleSubmit} />
                </div>
                <div className="VideoContainer">
                    <div className="SingleVideoPlay">
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className="videoList">
                        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        <br></br><br></br><br></br><br></br>
                    </div>
                </div>
            </div>
            // <Grid justify="center" style={{maxWidth : "100vw" , backgroundColor : 'Black'}} container spacing={10}>
            //     <Grid item xs={12}>
            //         <Grid container justify="center" spacing={8}>
                        
            //         </Grid>
            //     </Grid>
            // </Grid>
        );
    };
};

export default App;