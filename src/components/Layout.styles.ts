import { styled } from 'styled-components';

export const StyledContent = styled.main`
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: ${(props) => props.theme.layout.maxWidth};
  padding: ${(props) => [props.theme.layout.vGap, props.theme.layout.hGap].join(' ')};
  position: relative;
`;
