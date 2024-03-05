import type { Meta, StoryObj } from '@storybook/react';

import { Loading, LoadingProps } from './Loading';

const LoadingStory = ({ ...rest }: LoadingProps) => (
  <div
    style={{
      height: '400px',
      width: '400px',
    }}
  >
    <Loading {...rest} />
  </div>
);

const meta = {
  title: 'Components/Loading',
  component: LoadingStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
  },
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;
export const WithColor: Story = {
  args: {
    color: 'red',
  },
};

export const Primary: Story = {
  parameters: {
    controls: { exclude: ['color'] },
  },
};
