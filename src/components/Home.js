import React, {Component} from 'react';

class Home extends Component {
    render() {
        return(
            <div className="home">
                <h1>Sound Wall</h1>
                <div className="main_nav">
                    <button>Consonant Chart</button>
                    <button>Vowel Valley</button>
                </div>
                <div className="sub_nav">
                    <button>Research</button>
                    <button>About</button>
                </div>
            </div>
        );
    }
}
export default Home;