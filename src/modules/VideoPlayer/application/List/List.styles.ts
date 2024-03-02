import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const StyledGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  padding: 20px;
`;

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.contrast};
  box-shadow: ${({ theme }) => theme.shadows.base};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  padding: ${({ theme }) => theme.layout.hGap};
  margin: ${({ theme }) => theme.layout.vGap};
  text-align: center;
`;

export const StyledControlBar = styled(StyledCard)`
  z-index: 1000;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({ theme }) => theme.layout.vGap} 0;
  max-width: 600px;
  width: 100%;
  bottom: 0;
  gap: ${({ theme }) => theme.layout.hGap};
`;

export const StyledVideoTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.colors.lighter.contrast};
  word-break: break-all;
`;

export const StyledImage = styled.img`
  border-radius: ${({ theme }) => theme.borderRadius.small};
  width: 250px;
  height: 150px;
  transition: transform 0.3s ease;
`;

export const StyledVideoCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: calc(${({ theme }) => theme.layout.vGap} / 2);

  &:hover {
    ${StyledImage} {
      transform: scale(1.1);
      transition: transform 0.3s ease;
    }
  }
`;

export const StyledChannelName = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sx};
  color: ${({ theme }) => theme.colors.lighter.contrast};
  word-break: break-all;
`;
