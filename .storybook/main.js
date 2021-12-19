module.exports = {
  "stories": [
    "../stories/introduction.stories.mdx",
    "../stories/**/*.stories.@(ts|mdx)",
    "../projects/components/**/*.stories.@(ts|mdx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/angular",
  "core": {
    "builder": "webpack5"
  }
}