import styled from 'styled-components';
import Wrap from './Wrap';

export const StWrap = styled(Wrap)`
  display: flex;
  flex-direction: column;
  align-items: center;
  div:first-child {
    margin-top: 56px;
  }
`;

export const ButtonWrap = styled(Wrap)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  button {
    margin-bottom: 12px;
  }
  a {
    color: #575dfb;
    text-decoration: underline;
    font-weight: 600;
  }
`;

export const ImgWrap = styled(Wrap)`
width: 100px;
`
