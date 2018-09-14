import styled from 'styled-components';

export default styled.div(
  [],
  {
    position: 'absolute',
  },
  props => props.hasOwnProperty('top') ? `top: ${props.top}` : undefined,
  props => props.hasOwnProperty('right') ? `right: ${props.right}` : undefined,
  props => props.hasOwnProperty('bottom') ? `bottom: ${props.bottom}` : undefined,
  props => props.hasOwnProperty('left') ? `left: ${props.left}` : undefined,
);
