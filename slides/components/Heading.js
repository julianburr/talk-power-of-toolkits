import styled from 'styled-components';

export default styled.h1`
  font-size: 8vh;
  color: ${props => (props.yellow ? '#DEC055' : '#5A5151')};
  text-align: center;
  line-height: 1.1;
`;
