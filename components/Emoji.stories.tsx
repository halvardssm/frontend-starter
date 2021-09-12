import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Emoji } from "./Emoji";

export default {
  title: "Atom/Emoji",
  component: Emoji,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Emoji>;

const Template: ComponentStory<typeof Emoji> = (args) => (
  <div className="m-auto">
    <Emoji {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Emoji",
  symbol: "🚀",
  className: "w-5",
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  symbol: "🚀",
  className: "w-5",
};

export const MultipleSymbols = Template.bind({});
MultipleSymbols.args = {
  label: "MultipleSymbols",
  symbol: "🚀🦕",
  className: "w-5",
};
