import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return(
            <div className="home">
                <h1>Sound Wall</h1>
                <div className="main_nav">
                    <Link to="/consonant-chart">Consonant Chart</Link>
                    <Link to="/vowel-valley">Vowel Valley</Link>
                </div>
                <div className="sub_nav">
                    <Link to="/about">About</Link>
                </div>
            </div>
        );
    }
}
export default withRouter(Home);