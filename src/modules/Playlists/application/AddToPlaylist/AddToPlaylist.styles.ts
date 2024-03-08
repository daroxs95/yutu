import styled from 'styled-components';

export const StyledModalTitle = styled.h2`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.lighter.contrast};
`;

export const StyledModalDescription = styled.p`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.lighter.contrast};
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
