import React from 'react';

import Video from './video';
import NewVideo from './newVideo'

import { Row, Col } from 'react-bootstrap';
import style from './age.css';

export default class Age extends React.Component {
    constructor(props) {
        super(props);
        console.log(props, "props")
        this.state = { videos: [] };
    }

    componentDidMount() {
        this.setState({
            videos: this.getVideos()
        });
    }

    getVideos() {
        return({
            lol:'4'
        });
    }

    render() {
        return (
            <Row>
                <Col className="line" md={12}>
                    {this.props.value.name}
                    <Video/>
                </Col>
            </Row>
        )
    }
}
