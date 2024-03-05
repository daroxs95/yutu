import type { Meta, StoryContext, StoryObj } from '@storybook/react';

import { StyledInput } from './Input.styles';

const meta = {
  title: 'Components/Input',
  component: StyledInput,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        transform: (code: string, storyContext: StoryContext) => {
          return `<StyledInput>\n\t${storyContext.allArgs.text}\n</StyledInput>`;
        },
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text', defaultValue: 'Fill me' },
  },
} satisfies Meta<typeof StyledInput>;

export default meta;
type Story = StoryObj<typeof meta>;
export const TextButton: Story = {
  args: {
    placeholder: 'Fill me',
  },
};
