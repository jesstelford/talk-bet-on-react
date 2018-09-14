import React, { Fragment } from 'react'
import styled from 'styled-components'
import { fontSize, space, borders, color, width } from 'styled-system'

const PROGESS_HEIGHT = '3px';

const Footer = styled.div(
  [],
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: `-${PROGESS_HEIGHT}`,
  },
  ({ theme: { colors } }) => ({ borderTop: `1px solid ${colors.border}` }),
  borders,
  space,
  color,
);
const ProgressBar = styled.div([], { height: PROGESS_HEIGHT }, width, color);
const FootItem = styled.div([], fontSize, space, color);
const Link = styled.a([], color);
const StealthLink = styled(Link)([], {
  textDecoration: 'none',
});
const Row = styled.div([],
  {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    alignItems: 'center',
  }
);

export default ({ index, length }) =>
  <Fragment>
    <Footer p={3} bg='background'>
      <FootItem fontSize={1} px={3} color='text'>NDC Sydney 🇦🇺</FootItem>
      <FootItem fontSize={1} color='text'><code>Option</code>+<code>p</code> to see detailed notes</FootItem>
      <Row>
        <FootItem fontSize={1} px={3} color='text'><Link href="https://mobile.twitter.com/jesstelford" color='link' target="_blank">@JessTelford</Link></FootItem>
        |
        <FootItem fontSize={1} px={3} color='text'><Link href="https://cete.io" color='link' target="_blank">cete.io</Link></FootItem>

        <StealthLink href="https://cete.io" color='link' target="_blank"><img src="./images/badger-large.svg" style={{ height: '1.5em' }} /></StealthLink>
      </Row>
    </Footer>
    <ProgressBar width={(index + 1) / length} bg='border' />
  </Fragment>
