import React from 'react'
import styled from 'styled-components'
import components from 'mdx-deck/dist/components'

const UL = styled.ul`
  padding-inline-start: 2em;
  margin-block-start: 0;
  margin-block-end: 0;
`;

export default {
  blockquote: (props) => <components.blockquote fontSize={0} px={5} style={{ fontStyle: 'italic', fontWeight: 'normal' }} {...props} />,
  ul: UL,
}
