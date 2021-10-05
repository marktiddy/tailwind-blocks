## Introduction

Tailwind Blocks is a WordPress starter plugin to quickly and cleanly build Gutenberg blocks with Tailwind CSS. Forked from Bricks.

## License

Tailwind Blocks is open-sourced software licensed under the [MIT license](LICENSE.md).

## Getting Started

This plugin is built to enable you to rename and prefix your blocks for each project.

In plugin.php change the variable prefix plugin to be whatever you like

In /resources/js update the vars.js file to include your chosen prefix

## Starter

There is a starter block configured that uses the RichText editor and has some attributes. It's probably best to keep this as boilerplate and clone it for other blocks

## Reference

This is a useful respository for block starters - https://github.com/zgordon/gutenberg-course/tree/master/blocks

## Using this plugin alongside tailpress

This adaptation of bricks has been put together to use for developing custom gutenberg blocks alongside using Tailpress for custom theme development.

To use this with a Tailpress theme you will need to copy across some settings

- Make sure your tailwind config file in this plugin includes any extended fonts, colors etc. This will ensure that your styles also appear in the backend.
- You will also need to enqueue these fonts in the plugin.php file for the admin.
