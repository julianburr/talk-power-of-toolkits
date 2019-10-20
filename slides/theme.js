import { createGlobalStyle } from 'styled-components';

export const Styles = createGlobalStyle`
  li {
    position: relative;
  }
  
  li::before {
    content: '—';
    position: absolute;
    left: -30px;
    top: -2px;
  }
`;

export default {
  fonts: {
    body: 'Bungee, serif',
    monospace: '"Roboto Mono", monospace'
  },
  colors: {
    text: '#5A5151',
    background: '#F7EB8C',
    primary: '#5A5151'
  },
  styles: {
    Slide: {
      padding: '10vh',
      fontSize: '42px',
      justifyContent: 'flex-start'
    },
    h1: {
      fontSize: '65px',
      padding: '50px 0',
      margin: 0,
      textAlign: 'center'
    },
    ul: {
      listStyle: 'none',
      padding: '40px 0 40px 40px'
    },
    li: {
      lineHeight: '1.3',
      padding: '0 0 25px 25px',
      fontWeight: 300,
      fontFamily: 'Montserrat'
    }
  }
};
