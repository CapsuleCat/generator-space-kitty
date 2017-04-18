import React, { Component } from 'react';
import { node } from 'prop-types';

export default class <%= componentName %> extends Component {
  static propTypes = {
    children: node,
  }

  render() {
    const {
      children,
    } = this.props;

    return (
      <div className="<%= bemName %>">
        {children}
      </div>
    );
  }
}
