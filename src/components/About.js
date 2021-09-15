import "./about.css";
import React, {Component} from "react";
import { withRouter, Link } from "react-router-dom";

class About extends Component {
    render () {
        return(
            <div className="about">
                <div className="why">
                    <h1>Why Sound Walls?</h1>
                    <p>If you're here, you've probably heard of word walls. Word walls are a wonderful way to support students in reading and spelling common and irregular words.
                    Now, imagine you are writing the word <strong>circle</strong>. As an adult, you would probably search the word wall starting with the letter <strong>C</strong>. Right?
                    But imagine finding the word <strong>circle</strong> as an early reader. You stretch the word out sound by sound. Then you start looking under the letter <strong>S</strong>.
                    Mapping words by their sounds (phonemes) instead of by letter (graphemes) or spelling (orthographic) patterns would support this early reader in finding the word circle and learning that <strong>C</strong> the grapheme, has two matching phonemes.</p>
                    <p>Would you like to read more about sound walls?</p>
                    <a href="https://www.tools4reading.com/blog" target="blank">Tools 4 Reading</a>
                </div>
                <div className="dev">
                    <h3>About the developer</h3>
                    <p>Abbie Bowen is a former teacher who turned to software development to build better tools for students and teachers.
                    You can find more of her work at <a href="https://abbiebowen.herokuapp.com/" target="blank">her portfolio</a> and contact her 
                    on <a href="https://www.linkedin.com/in/abbiebowen/" target="blank">LinkedIn.</a></p>
                </div>
                <div className="sub_nav back">
                    <Link to="/">Home</Link>
                </div>
            </div>
        );
    }
}

export default withRouter(About);