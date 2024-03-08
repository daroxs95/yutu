import { styled } from 'styled-components';

export const StyledViews = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const StyledDetailsContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const StyledControls = styled.div`
  display: flex;
  gap: 1rem;
`;
