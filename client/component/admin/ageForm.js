import React from 'react';

import { Grid, Row, Col, FormControl, ControlLabel } from 'react-bootstrap';
import style from './ageForm.css';

export default class AgeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            from: "",
            to: "",
            style: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        console.log(this.state);
        return false;
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="ageForm">
                <Col md={12}>
                    <label> 
                        Age: 
                        <FormControl type="text" value={this.state.name} name="name" onChange={this.handleChange} />
                    </label>
                </Col>
                <Col md={12}>
                    <Col xs={6}>
                        <label>
                            from :
                        <FormControl type="text" value={this.state.from} name="name" onChange={this.handleChange} />
                        </label>
                    </Col>
                    <Col xs={6}>
                        <label>
                            to :
                        <FormControl type="text" value={this.state.to} name="name" onChange={this.handleChange} />
                        </label>
                    </Col>
                </Col>
                <Col md={12}>
                    <label>
                        Style :
                    <FormControl type="text" value={this.state.style} name="name" onChange={this.handleChange} />
                    </label>
                </Col>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}