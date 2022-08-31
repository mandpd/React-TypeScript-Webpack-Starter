import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { MyButton } from './MuiButton'

export default {
  title: 'Example/MuiButton',
  component: MyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MyButton>

const Template: ComponentStory<typeof MyButton> = () => <MyButton />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button',
}
