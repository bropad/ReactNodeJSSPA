import React from 'react'
import Axios from 'axios'

import AgeForm from './ageForm'

export default class Admin extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: '', test: [] };

        this.handleChange = this.handleChange.bind(this);
        this.postRequest = this.postRequest.bind(this);
        this.getRequest = this.getRequest.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    componentDidMount() {
        this.getRequest();
    }

    postRequest() {
        console.log("put route");
        Axios.post('/admin/routeAdmin', { value: this.state.value })
            .then(function (response) {
                console.log("response", response);
                this.setState({ value: "" });
                this.getRequest();
            }.bind(this))
            .catch((err) => {
                console.log("err", err);
            })
    }

    
    getRequest() {
        console.log("get route");
        Axios.get('/admin/routeAdmin')
            .then(function(response) {
                console.log(response);
                this.setState({ test: response.data });
                console.log(this.state);
            }.bind(this))
            .catch((error) => {
                console.log(error);
            });
    }

    deleteRequest(_id, e) {
        console.log(e.target, _id);
        //data est obligatoir pour une route delete
        Axios.delete('/admin/routeAdmin', {data: {id:_id}})
            .then(function(res) {
                console.log(res);
                this.getRequest();
            }.bind(this))
            .catch((err) =>{
                console.log(err);
            })
    }

    render() {

        const lestTest = this.state.test.map((item, index) => {
            return (
                <li key={item._id.toString()} onClick={this.deleteRequest.bind(this, item._id)}>{item.name}</li>
            );
        });

        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button onClick={this.postRequest}>put</button>
                <button onClick={this.getRequest}>get</button>
                <ul>{lestTest}</ul>
                <AgeForm/>
            </div>
        )
    }
}
