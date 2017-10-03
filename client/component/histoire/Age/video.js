import React from 'react'
import Axios from 'axios';

import style from './video.css'

export default class Video extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.getVideos();
    }

    getVideos() {
        Axios.get('/test')
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    render() {
        return (
            <div className="videoCadre">

            </div>
        );
    };
}
