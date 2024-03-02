import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  max-width: 1024px;
  min-width: 340px;
  margin: auto;
`;

export const StyledIframeContainer = styled(motion.div)<{ $floating: boolean }>`
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ $floating }) => ($floating ? 'fit-content' : '100%')};
  position: ${({ $floating }) => ($floating ? 'fixed' : 'relative')};
  top: ${({ $floating }) => ($floating ? '30px' : 'auto')};
  right: ${({ $floating }) => ($floating ? '30px' : 'auto')};

  ${StyledIframe} {
    @media (min-width: 768px) {
      min-height: ${({ $floating }) => ($floating ? '200px' : '600px')};
    }
    min-height: ${({ $floating }) => ($floating ? '200px' : '400px')};
  }
`;

export const StyledControls = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;
