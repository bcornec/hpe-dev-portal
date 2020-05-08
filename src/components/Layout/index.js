import React from 'react';
import PropTypes from 'prop-types';
import { hpe } from 'hpe-design-system';
import { Grommet, Box } from 'grommet';

import './reset.css';
import { Footer, Header } from '../index';

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <Grommet
        full
        theme={hpe}
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '100%',
          minHeight: '100vh',
          height: 'auto',
        }}
      >
        <Header />
        <Box flex as="main" width="xxlarge" alignSelf="center">
          {children}
        </Box>
        <Footer />
      </Grommet>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
