import { styled } from 'styled-components';

import { StyledContent } from '../Layout.styles';

export const StyledErrorContent = styled(StyledContent)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;
