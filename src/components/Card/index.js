import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Box, Heading, Image, Markdown, Text } from 'grommet';
import { Link as GatsbyLink } from 'gatsby';

const colors = {
  develop: 'yellow', // HPE Yellow
  design: 'purple', // HPE Medium Purple
  event: 'status-unknown',
  community: 'blue', // HPE Dark Blue
  'open source': 'purple', // HPE Medium Purple
  research: 'blue', // HPE Medium Blue
};

const NavLink = styled(GatsbyLink)`
  text-decoration: none;
`;

// Remove padding or margin from first markdown element.
// This allows the heading and content to have the same gap.
const MarkdownLayout = styled(Markdown)`
  & > *:first-child {
    margin-top: 0;
    padding-top: 0;
  }
`;

// Remove padding or margin from first markdown element.
// This allows the heading and content to have the same gap.
const MarkdownCenteredLayout = styled(Markdown)`
  & > *:first-child {
    margin-top: 0;
    padding-top: 0;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const components = {
  h1: {
    component: Heading,
    props: {
      margin: { top: 'none', bottom: 'xsmall' },
      level: 1,
      color: 'dark-1',
    },
  },
  h2: {
    component: Heading,
    props: {
      margin: { top: 'none', bottom: 'xsmall' },
      level: 2,
      color: 'dark-1',
    },
  },
  h3: {
    component: Heading,
    props: {
      margin: { top: 'none', bottom: 'xsmall' },
      level: 3,
      color: 'dark-1',
    },
  },
  h4: {
    component: Heading,
    props: {
      margin: { top: 'none', bottom: 'none' },
      level: 4,
      color: 'dark-1',
      style: {
        fontWeight: 'normal',
      },
    },
  },
  p: {
    component: Text,
    props: {
      size: 'xlarge',
      color: 'dark-3',
      style: {
        maxWidth: '100%',
      },
    },
  },
  img: {
    component: Image,
    props: {
      margin: { vertical: 'medium' },
      style: {},
    },
  },
};

export const Card = ({
  children,
  pad,
  width,
  gap,
  category,
  content,
  align,
  link,
  ...rest
}) => (
  <Box
    margin="small"
    flex="grow"
    width={width || 'medium'}
    border={{
      side: 'top',
      color: colors[category ? category.toLowerCase() : 'develop'],
      size: 'medium',
    }}
  >
    <Box align="end">
      <Text color="dark-5">{category}</Text>
    </Box>
    <NavLink to={link}>
      <Box
        fill="vertical"
        justify="center"
        align="center"
        gap={gap || 'none'}
        pad={{ horizontal: 'large', vertical: 'large', ...pad }}
        {...rest}
      >
        {children}
        {content && align === 'center' && (
          <MarkdownCenteredLayout components={components}>
            {content}
          </MarkdownCenteredLayout>
        )}
        {content && align !== 'center' && (
          <MarkdownLayout components={components}>{content}</MarkdownLayout>
        )}
      </Box>
    </NavLink>
  </Box>
);

Card.propTypes = {
  content: PropTypes.string,
  children: PropTypes.node,
  width: PropTypes.string,
  gap: PropTypes.string,
  pad: PropTypes.shape({
    horizontal: PropTypes.string,
    vertical: PropTypes.string,
  }),
  category: PropTypes.string,
  align: PropTypes.string,
  link: PropTypes.string,
};

export default Card;
