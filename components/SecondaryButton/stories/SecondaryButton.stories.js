import SecondaryButton from '../SecondaryButton';
import {
  defaultData,
  worksCodeData
} from './data'

export default {
  title: 'Components/SecondaryButton',
  component: SecondaryButton,
  parameters: {
    layout: 'centered'
  }
}

const Template = (args) => <SecondaryButton {...args} />

export const Default = Template.bind({})
export const worksCode = Template.bind({})

Default.args = { ...defaultData }

Default.parameters = {
  nextRouter: {
    pathname: '/',
  },
}

worksCode.args = { ...worksCodeData }

worksCode.parameters = {
  nextRouter: {
    pathname: '/',
  },
}
