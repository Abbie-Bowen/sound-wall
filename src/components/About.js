import React, {Component} from "react";
import { withRouter, Link } from "react-router-dom";

class About extends Component {
    render () {
        return(
            <div className="about">
                <h1>This is the about page</h1>
                <p>This is some text about the app.</p>
                <div className="sub_nav back">
                    <Link to="/">Home</Link>
                </div>
            </div>
        );
    }
}

export default withRouter(About);