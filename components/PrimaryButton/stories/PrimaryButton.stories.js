import PrimaryButton from "../PrimaryButton";
import {
  defaultData,
  heroData,
  worksPageData,
  worksCodeData,
} from './data'

export default {
  title: 'Components/PrimaryButton',
  component: PrimaryButton,
  parameters: {
    layout: 'centered',
  },
}

const Template = (args) => <PrimaryButton {...args} />

export const Default = Template.bind({})
export const HeroButton = Template.bind({})
export const WorksPageButton = Template.bind({})
export const WorksCodeButton = Template.bind({})

Default.args = {
  ...defaultData
}

Default.parameters = {
  nextRouter: {
    pathname: '/',
  },
}

HeroButton.args = {
  ...heroData
};

HeroButton.parameters = {
  nextRouter: {
    pathname: '/',
  },
}

WorksPageButton.args = {
  ...worksPageData
};

WorksPageButton.parameters = {
  nextRouter: {
    pathname: '/',
  },
}

WorksCodeButton.args = {
  ...worksCodeData
}

WorksCodeButton.parameters = {
  nextRouter: {
    pathname: '/',
  },
}