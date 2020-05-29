import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

import {ACCESS_TOKEN} from "../constants";

class OAuth2RedirectHandler extends Component {
    getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        var results = regex.exec(this.props.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    render() {
        const token = this.getUrlParameter('token');
        const error = this.getUrlParameter('error');

        if (token) {
            localStorage.setItem(ACCESS_TOKEN, `Bearer ${token}`);
            return <Redirect to={{
                pathname: "/rexa/dashboard",
                state: {from: this.props.location}
            }}/>;
        } else {
            return <Redirect to={{
                pathname: "/rexa/login",
                state: {
                    from: this.props.location,
                    error: error,
                }
            }}/>;
        }
    }
}

OAuth2RedirectHandler.propTypes = {
    // react-router provided
    location: PropTypes.object,
};

export default OAuth2RedirectHandler;
