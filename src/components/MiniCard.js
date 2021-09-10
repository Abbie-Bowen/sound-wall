import React, {Component} from "react";
import test from "../media/images/sir-manuel-4P831Njlg6g-unsplash.jpg";

class MiniCard extends Component {
    render() {
        return(
            <div className="mini">
                <img className="mini-img" src={test} alt="child talking"></img>
                <p className="mini-text">/th/</p>
            </div>
        );
    }
}

export default MiniCard;