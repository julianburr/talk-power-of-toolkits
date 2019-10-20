import styled from 'styled-components';

export default styled.p`
  font-size: 5vh;
  color: ${props => (props.yellow ? '#DEC055' : '#5A5151')};
  text-align: center;
  line-height: 1.1;
  margin: 0;
  padding: 2.4vh 0;
`;
