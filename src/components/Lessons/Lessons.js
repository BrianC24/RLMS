import React, { Component } from 'react';
import loading from '../../assets/loading.gif';

class Lessons extends Component {
    state = {}
    render() {
        return (
            <div className="under-dev-container">
                <div className="content">
                    <h1>Lessons page in development</h1>
                    <img src={loading} alt="" />
                </div>
            </div>
        );
    }
}

export default Lessons;