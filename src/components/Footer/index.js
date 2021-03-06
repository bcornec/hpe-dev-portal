import React from 'react';
import { Box, Heading, Anchor } from 'grommet';
import { EmailCapture } from '../../containers';

export const Footer = () => (
  <Box
    direction="row-responsive"
    border
    justify="between"
    pad={{ vertical: 'large', horizontal: 'xlarge' }}
  >
    <Box>
      <EmailCapture />
    </Box>
    <Box direction="row" justify="between" gap="large">
      <Box align="start" gap="medium">
        <Heading margin="none" level="4">
          HPE DEV
        </Heading>
        <Box gap="small">
          <Anchor
            align="start"
            href="https://slack.hpedev.io/"
            label="Slack Channel"
            target="_blank"
            rel="noopener noreferrer"
          />
          <Anchor
            align="start"
            href="https://twitter.com/HPE_DevCom"
            label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          />
          <Anchor
            align="start"
            href="https://www.youtube.com/channel/UCAdEqOhSnzlLBtaapu567AQ"
            label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
          />
          <Anchor
            align="start"
            href="mailto:hpedev@hpe.com?
            subject=HPE%20DEV%20Portal%20-%20Contact%20Us"
            label="Contact Us"
            target="_blank"
            rel="noopener noreferrer"
          />
        </Box>
      </Box>
      <Box align="start" gap="medium">
        <Heading margin="none" level="4">
          About HPE
        </Heading>
        <Box gap="small">
          <Anchor
            align="start"
            href="https://www.hpe.com/"
            label="HPE.com"
            target="_blank"
            rel="noopener noreferrer"
          />
          <Anchor
            align="start"
            href="https://www.hpe.com/us/en/about/jobs.html"
            label="HPE Careers"
            target="_blank"
            rel="noopener noreferrer"
          />
          <Anchor
            align="start"
            href="https://community.hpe.com/"
            label="HPE Community"
            target="_blank"
            rel="noopener noreferrer"
          />
          <Anchor
            align="start"
            href="https://github.com/hewlettpackard/"
            label="HPE GitHub"
            target="_blank"
            rel="noopener noreferrer"
          />
        </Box>
      </Box>
    </Box>
  </Box>
);

export default Footer;
