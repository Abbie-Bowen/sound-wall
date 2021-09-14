import React, {Component} from "react";
import { withRouter, Link } from "react-router-dom";

class NoMatch extends Component {
    render () {
        return(
            <div className="404">
                <h1>Oops!</h1>
                <p>Sorry, the page you were trying to find doesn't exist!</p>
                <div className="sub_nav back">
                    <Link to="/">Home</Link>
                </div>
            </div>
        );
    }
}

export default withRouter(NoMatch);