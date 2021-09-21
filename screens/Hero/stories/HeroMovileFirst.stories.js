import Hero from "../Hero";
import { defaultData } from "./data";

export default {
  title: 'Screens/Hero',
  component: Hero,
}

const Template = (args) => <Hero {...args} />

export const Default = Template.bind({})

Default.args = { ...defaultData }