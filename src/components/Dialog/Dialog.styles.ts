import styled from 'styled-components';

export const StyledDialog = styled.dialog`
  position: relative;
  width: 400px;
  border-radius: 8px;
  border: none;
  padding: 2rem 3rem;
  outline: none;
  margin: auto;
  max-height: 80vh;
`;

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
`;
