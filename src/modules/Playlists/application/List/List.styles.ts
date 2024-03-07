import { styled } from 'styled-components';

export const StyledListWrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin-top: ${(p) => p.theme.layout.vGap};
  transform: translate(500px, calc(-100% + 40px));
  transition: transform 0.3s ${(p) => p.theme.easings.base};
  z-index: 1000;

  &:hover {
    transform: translate(500px, 0);
  }
`;

export const StyledList = styled.div`
  background-color: ${(props) => props.theme.colors.secondary.base};
  width: 100%;
  overflow-y: auto;
  padding: ${(p) => p.theme.layout.hGap};
  border-radius: ${(p) => p.theme.borderRadius.base};
  display: flex;
  flex-direction: column;
  z-index: 100;

  ol {
    margin-left: calc(${(p) => p.theme.layout.vGap} * 4);
  }
`;

export const StyledListItem = styled.button`
  all: unset;
  padding: ${(p) => p.theme.layout.vGap} ${(p) => p.theme.layout.hGap};
  border-radius: ${(p) => p.theme.borderRadius.base};
  box-shadow: ${(p) => p.theme.shadows.base};
  background-color: ${(props) => props.theme.colors.lighter.base};
  color: ${(props) => props.theme.colors.lighter.contrast};
  margin-bottom: ${(p) => p.theme.layout.vGap};
  overflow: auto;
  width: 300px;
  transition: background-color 1s ${(p) => p.theme.easings.base};
  border: 2px solid ${({ theme }) => theme.colors.secondary.base};
  transition: border-color 1s ${({ theme }) => theme.easings.base};

  &:hover:not(:disabled) {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primary.highlight};
    border-color: ${({ theme }) => theme.colors.primary.base};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.theme.colors.lighter.contrast};
  }
`;

export const StyledListText = styled.div`
  display: flex;
  flex-direction: column;
  line-clamp: 1;
`;

export const StyledListDescription = styled.p`
  display: flex;
  flex-direction: column;
  font-size: ${(p) => p.theme.fontSizes.xs};
`;

export const StyledTray = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: 100px;
  background-color: ${(p) => p.theme.colors.secondary.base};
  color: ${(p) => p.theme.colors.lighter.contrast};
  padding: ${(p) => p.theme.layout.vGap} ${(p) => p.theme.layout.hGap};
  border-radius: 0 0 ${(p) => p.theme.borderRadius.base}
    ${(p) => p.theme.borderRadius.base};
  text-align: center;
  box-shadow: ${(p) => p.theme.shadows.extra};
`;
