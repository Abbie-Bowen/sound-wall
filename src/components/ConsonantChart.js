import './Consonant.css';
import React, {Component} from "react";
import { BrowserRouter, Link } from 'react-router-dom';
import MiniCard from "./MiniCard"


class ConsonantChart extends Component {
    render() {
        return(
            <BrowserRouter>
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
                    <div className="s1"><MiniCard className={"consonant-mini"} /></div>
                    <div className="s4"><MiniCard className={"consonant-mini"} /></div>
                    <div className="s6"><MiniCard className={"consonant-mini"} /></div>
                    <div className="n1"><MiniCard className={"consonant-mini"} /></div>
                    <div className="n4"><MiniCard className={"consonant-mini"} /></div>
                    <div className="n6"><MiniCard className={"consonant-mini"} /></div>
                    <div className="f2"><MiniCard className={"consonant-mini"} /></div>
                    <div className="f3"><MiniCard className={"consonant-mini"} /></div>
                    <div className="f4"><MiniCard className={"consonant-mini"} /></div>
                    <div className="f5"><MiniCard className={"consonant-mini"} /></div>
                    <div className="f7"><MiniCard className={"consonant-mini"} /></div>
                    <div className="a5"><MiniCard className={"consonant-mini"} /></div>
                    <div className="g1"><MiniCard className={"consonant-mini"} /></div>
                    <div className="g5"><MiniCard className={"consonant-mini"} /></div>
                    <div className="l4"><MiniCard className={"consonant-mini"} /></div>
                    <div className="l5"><MiniCard className={"consonant-mini"} /></div>
                    <div className="sub_nav back">
                        <Link to="/">Home</Link>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default ConsonantChart;