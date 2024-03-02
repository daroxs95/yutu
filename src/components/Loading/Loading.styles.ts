import { keyframes, styled } from 'styled-components';

export const StyledLoading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(16px) saturate(180%);
  display: flex;
  justify-content: center;
  align-items: center;
  //This is required to a bug in chrome
  //View it in https://codesandbox.io/p/sandbox/parent-opacity-bug-zw96gr
  background: rgba(0, 0, 0, 0.01);
`;

const spinnerKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: scale(0) translateX(-300%);
  }

  50% {
    opacity: 1;
    transform: scale(1.25) translateX(0);
  }

  100% {
    opacity: 0;
    transform: scale(0) translateX(300%);
  }
`;

export const StyledSpinner = styled.div`
  width: 56px;
  height: 56px;
  animation: ${spinnerKeyframes} 1s infinite;
  background-color: ${({ theme }) => theme.colors.primary.base};
  border-radius: 50%;
`;
