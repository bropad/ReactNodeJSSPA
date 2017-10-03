import React from 'react'

import Axios from 'axios';

import style from './video.css'
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

export default class NewVideo extends React.Component {
    constructor(props) {
        super(props);

        this.state = { videoName: 'video', title: 'title' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleClick(eleme, event) {
        let change = {};
        change[eleme] = event.target.value;
        this.setState(change);
    }

    handleClickVideo(eleme, event) {
        console.log("video ", this.youtubeParser(event.target.value));
        event.target.value = this.youtubeParser(event.target.value) ? 'http://www.youtube.com/embed/' + this.youtubeParser(event.target.value) : event.target.value;
        console.log("eleme =>", event.target.value);

        let change = {};
        change[eleme] = event.target.value;
        this.setState(change);
    }

    youtubeParser(url) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length == 11) ? match[7] : false;
    }

    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        console.log('Video id = ', this.youtubeParser(this.state.videoName));
        this.sendVideo();
        return false;
    }

    sendVideo() {
        Axios.post('/addVideo', this.state)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Col sm={6}>
                    <iframe width="420" height="315" src={this.state.videoName} allowFullScreen></iframe>
                </Col>
                <Col sm={6}>
                    <label>
                        Video name:
                        <input
                            type="text"
                            placeholder="Enter text"
                            onChange={event => this.handleClickVideo("videoName", event)}
                            value={this.state.videoName}
                        />
                    </label>
                    <label>
                        Title:
                        <input
                            type="text"
                            placeholder="Enter text"
                            onChange={event => this.handleClick("title", event)}
                            value={this.state.title}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </Col>
            </form>
        );
    };
}
