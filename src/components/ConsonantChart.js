import './Consonant.css';
import React, {Component} from "react";
import { withRouter, Link } from 'react-router-dom';
import MiniCard from "./MiniCard"

const consonantCardPlacement = ["s1", "s6", "n1","n4","n6","f2","f3","f4","f5","a5","g1","g5","l4","l5"];

class ConsonantChart extends Component {
    render() {
        let cards = consonantCardPlacement.map((id, index) =>
            <MiniCard className={"consonant-mini"} divId={id} key={index} />
        );

        return(
            <div className="consonant">
                <h2 className="consonant-header">Consonant Chart</h2>
                <h3 className="horizontal">Where and how we use our mouths.</h3>
                <h3 className="vertical">What we do with our breath and vocal chords.</h3>
                <p className="h1">Lips together</p>
                <p className="h2">Teeth on lips</p>
                <p className="h3">Tongue between teeth</p>
                <p className="h4">Tip of tongue raised behind top teeth</p>
                <p className="h5">Lips rounded, tongue pulled back</p>
                <p className="h6">Back of tongue lifted</p>
                <p className="h7">Airflow is unobstructed</p>
                <div className="sh1">
                    <p><b><u>STOP</u></b></p>
                    <p className="subheader">unvoiced & voiced</p>
                </div>
                <div className="sh2">
                    <p><b><u>NASAL</u></b></p>
                    <p className="subheader">voiced</p>
                </div>
                <div className="sh3">
                    <p><b><u>FRICATIVES</u></b></p>
                    <p className="subheader">unvoiced & voiced</p>
                </div>
                <div className="sh4">
                    <p><b><u>AFFRICATES</u></b></p>
                    <p className="subheader">unvoiced & voiced</p>
                </div>
                <div className="sh5">
                    <p><b><u>GLIDES</u></b></p>
                    <p className="subheader">unvoiced & voiced</p>
                </div>
                <div className="sh6">
                    <p><b><u>LIQUIDS</u></b></p>
                </div>
                {cards}
                <div className="sub_nav back">
                    <Link to="/">Home</Link>
                </div>
            </div>
        );
    }
}

export default withRouter(ConsonantChart);