import Navbar from '../Navbar';
import { defaultData } from './data'

/*   decorators: [
    StoryRouter(),
    (Story) => (
      <LenguajeProvider>
        <Story />
      </LenguajeProvider>
    )
  ], */
export default {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen'
  }
}

const Template = (args) => <Navbar {...args} />

export const Default = Template.bind({})

Default.args = { ...defaultData }