import styled, { css } from 'styled-components';

const RoundBlob = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  margin-right: 8px;
  ${props =>
    props.isOnline
      ? css`
          background-color: green;
        `
      : css`
          background-color: red;
        `}
`;

export default RoundBlob;
