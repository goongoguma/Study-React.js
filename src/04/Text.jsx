import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles, { css } from './withStyles';

class Text extends PureComponent {
  render() {
    const {
      children,
      styles,
      xsmall } = this.props;
    return (
      <span {...css(styles.default, xsmall && styles.hello)}>
        {children}
      </span>
    )
  }
};

Text.propTypes = {
  children: PropTypes.node.isRequired
};

export default withStyles(({ color, size, responsive }) => ({
  default: {
    color: color.default,
    fontSize: size.md,
    [responsive.small]: {
      width: '100%',
    }
  },
  hello: {
    fontSize: size.xs
  }
}))(Text);
