import React , {Component} from 'react';
import {Grid} from '@material-ui/core';

import {SearchBar , VideoDetail , VideoList} from './components/index';
import youtube from './api/youtube';

class App extends Component{
    state = {
        videos : [],
        selectedVideo : null
    }
    componentDidMount(){
        this.handleSubmit('naam');
    }
    handleSubmit = async (searchTerm)=>{
        const response = await youtube.get('search' , {
            params : {
                part : 'snippet',
                maxResults : 5,
                key : 'AIzaSyAIPfwTiBYVo-PfmqjdbOGXOZN-BGdQAOU',
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
            <Grid justify="center" style={{maxWidth : "100vw"}} container spacing={10}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={8}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit = {this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={this.state.selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    };
};

export default App;