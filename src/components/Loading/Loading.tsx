import { StyledLoading, StyledSpinner } from './Loading.styles';

export interface LoadingProps {
  color?: string;
}

export function Loading({ color }: LoadingProps) {
  return (
    <StyledLoading>
      <StyledSpinner
        style={{
          backgroundColor: color,
        }}
      />
    </StyledLoading>
  );
}
