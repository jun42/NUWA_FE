import styled from 'styled-components';

/**
 * @param {string} color ex)primary400
 * @param {number} weight ex) 100 200 300 400 500 600 700
 * @param {number} size (단위:px) ex) 16 32 /
 */
const StText = styled.span`
  color: ${({ theme, $color = 'grey700' }) => theme.color[$color]};
  font-weight: ${(props) => props.$weight};
  font-size: ${(props) => props.$size}px; // px
`;

export default StText;
