import { styled } from 'styled-components';

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

export const StyledVideoCard = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.secondary.base};
  border-radius: ${(p) => p.theme.borderRadius.base};
`;

export const StyledImage = styled.img`
  width: 250px;
  height: 150px;
  object-fit: cover;
  border-radius: ${(p) => p.theme.borderRadius.base};
`;
