import type { Meta, StoryContext, StoryObj } from '@storybook/react';

import { Close } from '../Icons/Close';
import { StyledButton } from './Button.styles';

const ButtonWrapper = ({ text, icon }: { text?: string; icon?: boolean }) => (
  <StyledButton>
    {text}
    {icon && <Close width={24} height={24} />}
  </StyledButton>
);

const meta = {
  title: 'Components/Button',
  component: ButtonWrapper,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        transform: (code: string, storyContext: StoryContext) => {
          return `<StyledButton>\n\t${storyContext.allArgs.text}\n</StyledButton>`;
        },
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text', defaultValue: 'Press me' },
  },
} satisfies Meta<typeof ButtonWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;
export const TextButton: Story = {
  args: {
    text: 'I am a simple button 🥲',
  },
};

export const WithIcon: Story = {
  args: {
    icon: true,
  },
  parameters: {
    docs: {
      source: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        transform: (code: string, storyContext: StoryContext) => {
          return `<StyledButton>\n\t<Close/>\n</StyledButton>`;
        },
      },
    },
  },
};
