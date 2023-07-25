import React, { Component } from 'react';

class FooterProps extends Component {
    render() {
        return (
            <li >
                <a href={this.props.linkUrl}>{this.props.linkName}</a>
            </li>
        );
    }
}

export default FooterProps;
