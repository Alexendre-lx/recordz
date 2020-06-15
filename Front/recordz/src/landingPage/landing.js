import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ConnexionForm from './conextion';
import './landing.css'

class landing extends Component {
    
    render() {
        return (
            <div class="landingContainer fill-window" style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                  <ConnexionForm/>
            </div>
        );
    }
}

export default landing;