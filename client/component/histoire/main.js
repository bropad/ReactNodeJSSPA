import React from 'react'
import Age from './Age/age'
import NewVideo from './Age/newVideo'

import styles from './main.css'
import { Grid } from 'react-bootstrap';


export default class mainHistoire extends React.Component {
    constructor(props) {
        super(props);

        this.state = { times: [] };
    }
    /*
        appeler après constructor -> componentWillMount -> render -> componentDidMount
    */
    componentDidMount() {
        this.setState({
            times: this.getTimes()
        });
    }

    getTimes() {
        //request http ici
        return ([{
            name:"Antiquité",
            From:"-3000",
            To:"476"
        },{
            name:"Moyen Âge",
            From:"476",
            To:"1453"
        }])
    }

    render() {
        const listAge = this.state.times.map((item) => {
            console.log(item);
            return (
                <Age key={item.name} value={item}/>
            );
        });

        return(
            <Grid>
                SALUT
                {listAge}
                <NewVideo/>
            </Grid>
        )
    }
}