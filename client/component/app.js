import React from 'react'
import {
    HashRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

import Histoire from './histoire/main'
import Admin from './admin/admin'

export default class App extends React.Component {
    render() {

        return (
            <Router>
                <div>
                    <Link to="/histoire">Histoire</Link>
                    <Link to="/admin">Admin</Link>

                    <Route path="/histoire" component={Histoire}/>
                    <Route path="/admin" component={Admin}/>
                </div>
            </Router>
        )
    }
}
