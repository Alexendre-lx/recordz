import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../frontPage/header'

class frontpage extends Component {
    render() {
        return (
            <div>
                <Header/>
            </div>
        );
    }
}

frontpage.propTypes = {

};

export default frontpage;