import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from 'grommet';
import { Link } from '..';

const NavLink = ({ to, children }) => (
  <Link to={to}>
    <Box round="xxsmall">
      <Text weight="bold" margin="none">
        {children}
      </Text>
    </Box>
  </Link>
);

NavLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
};

function Header() {
  return (
    <Box
      direction="row-responsive"
      gap="small"
      pad={{ vertical: 'xsmall', horizontal: 'medium' }}
      justify="between"
    >
      <Link to="/">
        <Text weight="bold" color="dark-1">
          HPE{' '}
        </Text>
        <Text weight="light" color="dark-1">
          Developer
        </Text>
      </Link>
      <Box direction="row" gap="medium" justify="center">
        <NavLink to="/research">Research</NavLink>
        <NavLink to="/design">Design</NavLink>
        <NavLink to="/develop">Develop</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/support">Support</NavLink>
      </Box>
    </Box>
  );
}
export default Header;
