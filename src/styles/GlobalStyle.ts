import { createGlobalStyle } from 'styled-components';
import NanumSquareRoundB from '../assets/fonts/NanumSquareRoundB.ttf';
import NanumSquareRoundEB from '../assets/fonts/NanumSquareRoundEB.ttf';
import NanumSquareRoundL from '../assets/fonts/NanumSquareRoundL.ttf';
import NanumSquareRoundR from '../assets/fonts/NanumSquareRoundR.ttf';

const GlobalStyle = createGlobalStyle`
      @font-face {
            font-family: 'NanumSquareRoundB';
            src: local('NanumSquareRoundB'), local('NanumSquareRoundB');
            font-style: normal;
            src: url(${NanumSquareRoundB}) format('truetype');
      }
      @font-face {
            font-family: 'NanumSquareRoundEB';
            src: local('NanumSquareRoundEB'), local('NanumSquareRoundEB');
            font-style: normal;
            src: url(${NanumSquareRoundEB}) format('truetype');
      }
      @font-face {
            font-family: 'NanumSquareRoundL';
            src: local('NanumSquareRoundL'), local('NanumSquareRoundL');
            font-style: normal;
            src: url(${NanumSquareRoundL}) format('truetype');
      }
      @font-face {
            font-family: 'NanumSquareRoundR';
            src: local('NanumSquareRoundR'), local('NanumSquareRoundR');
            font-style: normal;
            src: url(${NanumSquareRoundR}) format('truetype');
      }
`

export default GlobalStyle