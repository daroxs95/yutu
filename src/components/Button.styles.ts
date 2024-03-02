import { styled } from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary.base};
  color: ${({ theme }) => theme.colors.secondary.contrast};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  padding: ${({ theme }) => theme.layout.hGap};
  border: 2px solid ${({ theme }) => theme.colors.secondary.base};
  transition:
    border-color 1s ${({ theme }) => theme.easings.base},
    background-color 1s ${({ theme }) => theme.easings.base},
    color 1s ${({ theme }) => theme.easings.base};
  color: ${(props) => props.theme.colors.lighter.contrast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary.base};
  }
`;
