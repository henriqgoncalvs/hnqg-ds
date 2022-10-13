import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react';
import { TextInput, TextInputProps } from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="This is a placeholder" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputProps>;

export const Default: StoryObj<TextInputProps> = {};

export const WithoutIcon: StoryObj<TextInputProps> = {
  args: {
    children: <TextInput.Input placeholder="This is a placeholder" />,
  },
};
