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

const Template: ComponentStory<typeof MyButton> = ({ label }) => (
  <MyButton label={label} />
)

export const Primary = Template.bind({})
Primary.args = {
  label: 'Hi There',
}
