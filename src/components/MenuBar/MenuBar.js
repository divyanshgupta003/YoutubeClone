import React , {Component} from 'react';

import {Paper , TextField} from '@material-ui/core';
import './MenuBar.modules.css';

class SearchBar extends Component{
    state = {
        searchTerm : ''
    }
    handleChange = (event)=>{
        this.setState({searchTerm : event.target.value});
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        const {searchTerm} = this.state;
        const {onFormSubmit} = this.props;
        onFormSubmit(searchTerm);
    }
    render(){
        return (
            <div className="MenuBar">
                <div className="Logo">
                <i class="fa fa-youtube"></i>
                    <h3>YouTube-Cl</h3>
                </div>
                <div className="SearchContainer">
                    <form onSubmit={this.handleSubmit}>
                        <input placeholder="Search..." onChange={this.handleChange}/>
                    </form>
                    <button><i class="fa fa-microphone" aria-hidden="true"></i></button>
                </div>
            </div>
        )
    }
}

export default SearchBar;    