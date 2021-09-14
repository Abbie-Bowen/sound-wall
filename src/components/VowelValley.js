import './Vowel.css';
import React, {Component} from "react";
import MiniCard from "./MiniCard"
import {withRouter, Link} from "react-router-dom";

const vowelCardPlacement = ["c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","c11","c12","c13","d1","d2","r1","r2","r3"];

class VowelValley extends Component {
    render() {
        let cards = vowelCardPlacement.map((id, index) =>
            <MiniCard className={"vowel-mini"} divId={id} key={index} />
        );

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
                {cards}
                <div className="sub_nav back">
                    <Link to="/">Home</Link>
                </div>
            </div>
        );
    }
}

export default withRouter(VowelValley);