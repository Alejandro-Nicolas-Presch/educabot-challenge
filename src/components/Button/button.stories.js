import React from 'react'
import Button from './button'

export default {
  title: 'Button',
  component: Button
}
export const Primary = () => <Button variant='primary'>primary</Button>
export const Secondary = () => <Button variant='secondary'>secondary</Button>
export const Success = () => <Button variant='success'>success</Button>
export const Danger = () => <Button variant='danger'>danger</Button>

// const Template = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
