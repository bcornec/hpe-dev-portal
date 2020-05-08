import React, { useState } from 'react';
import PropTypes from 'prop-types';
import remark from 'remark';
import strip from 'strip-markdown';
import { Box, Heading, Paragraph, Text } from 'grommet';
import { Link } from '..';

const dateFormat = Intl.DateTimeFormat('default', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
});

const stripMarkdown = markdown => {
  let text = markdown;
  remark()
    .use(strip)
    .process(markdown, (err, file) => {
      text = file.contents;
    });
  return text;
};

export const BlogCard = ({ node, ...rest }) => {
  const [hover, setHover] = useState(false);
  const elevationSize = hover ? 'medium' : 'xsmall';
  return (
    <Box
      margin={{ bottom: 'medium' }}
      width={{ min: 'medium', max: '31%' }}
      background="light-1"
      round="small"
      elevation={elevationSize}
      style={{ transition: '0.1s box-shadow linear' }}
      {...rest}
    >
      <Link
        onMouseOver={() => setHover(true)}
        onFocus={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        onBlur={() => setHover(false)}
        plain
        to={`/${node.fields.sourceInstanceName}${node.fields.slug}`}
      >
        <Box
          width="100%"
          pad="large"
          gap="small"
          justify="center"
          align="start"
          style={{ pointerEvents: 'none' }}
        >
          <Box>
            {node.frontmatter.date && node.frontmatter.author && (
              <Text color="dark-3">
                {dateFormat.format(new Date(node.frontmatter.date))} by{' '}
                {node.frontmatter.author}
              </Text>
            )}
            <Heading
              level={2}
              size="small"
              margin={{ top: 'none', bottom: 'none' }}
              // Handle html entities in titles
              dangerouslySetInnerHTML={{ __html: node.frontmatter.title }}
            />
            {node.frontmatter.version && (
              <Text size="small" color="red">
                {node.frontmatter.version}
              </Text>
            )}
          </Box>
          <Box width="large">
            <Paragraph margin="none">
              {node.frontmatter.description || stripMarkdown(node.excerpt)}
            </Paragraph>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

BlogCard.propTypes = {
  node: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string,
      date: PropTypes.string,
      description: PropTypes.string,
      version: PropTypes.string,
    }).isRequired,
    excerpt: PropTypes.string.isRequired,
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
      sourceInstanceName: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default BlogCard;
