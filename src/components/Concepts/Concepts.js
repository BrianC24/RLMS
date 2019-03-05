import React, { Component } from 'react';
import loading from '../../assets/loading.gif';

class Concepts extends Component {
    state = {}
    render() {
        return (
            <div className="under-dev-container">
                <div className="content">
                    <h1>Concepts page in development</h1>
                    <img src={loading} alt="" />
                </div>
            </div>
        );
    }
}

export default Concepts;