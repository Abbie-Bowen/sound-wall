import './Vowel.css';
import React, {Component} from "react";
import MiniCard from "./MiniCard"
import {withRouter, Link} from "react-router-dom";

class VowelValley extends Component {
    render() {
        return(
            <div className="vowel">
                <h2 className="vowel-header">Vowel Valley</h2>
                <div className="l1">
                    <p>Begin with a tight smile /e/.</p>
                </div>
                <div className="l2">
                    <p>These are arranged by the slight opening of the mouth.</p>
                </div>
                <div className="l3">
                    <p>The most open sound is /o/, as in the sound we say when the doctor wants to see our tonsils.</p>
                </div>
                <div className="l4">
                    <p>These vowel phonemes are referred to as back rounded sounds.</p>
                </div>
                <div className="ld">
                    <p>Dipthongs</p>
                </div>
                <div className="lr">
                    <p>R-Controlled Vowels</p>
                </div> 
                <div className="c1"><MiniCard className={"vowel-mini"} /></div>
                <div className="c2"><MiniCard className={"vowel-mini"}/></div>
                <div className="c3"><MiniCard className={"vowel-mini"}/></div>
                <div className="c4"><MiniCard className={"vowel-mini"}/></div>
                <div className="c5"><MiniCard className={"vowel-mini"}/></div>
                <div className="c6"><MiniCard className={"vowel-mini"}/></div>
                <div className="c7"><MiniCard className={"vowel-mini"}/></div>
                <div className="c8"><MiniCard className={"vowel-mini"}/></div>
                <div className="c9"><MiniCard className={"vowel-mini"}/></div>
                <div className="c10"><MiniCard className={"vowel-mini"}/></div>
                <div className="c11"><MiniCard className={"vowel-mini"}/></div>
                <div className="c12"><MiniCard className={"vowel-mini"}/></div>
                <div className="c13"><MiniCard className={"vowel-mini"}/></div>
                <div className="d1"><MiniCard className={"vowel-mini"}/></div>
                <div className="d2"><MiniCard className={"vowel-mini"}/></div>
                <div className="r1"><MiniCard className={"vowel-mini"}/></div>
                <div className="r2"><MiniCard className={"vowel-mini"}/></div>
                <div className="r3"><MiniCard className={"vowel-mini"}/></div>
                <div className="sub_nav back">
                    <Link to="/">Home</Link>
                </div>
            </div>
        );
    }
}

export default withRouter(VowelValley);