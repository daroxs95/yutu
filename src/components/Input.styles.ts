import { styled } from 'styled-components';

export const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.colors.primary.contrast};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  padding: ${({ theme }) => theme.layout.hGap};
  border: 2px solid ${({ theme }) => theme.colors.secondary.base};
  transition: border-color 1s ${({ theme }) => theme.easings.base};
  color: ${(props) => props.theme.colors.lighter.contrast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary.base};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.base};
  }
`;
