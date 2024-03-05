import type { Preview } from '@storybook/react';
import { theme } from '../src/styles/theme';
import { ThemeProvider } from 'styled-components';
import { Decorator } from '@storybook/react';

const withTheme: Decorator = (StoryFn) => {
  return (
    <ThemeProvider theme={theme}>
      <StoryFn />
    </ThemeProvider>
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withTheme],
};

export default preview;
