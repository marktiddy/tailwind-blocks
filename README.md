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

## Note

If you're also developing a Tailwind theme you'll want to duplicate your tailwind.config.js extensions here so they show in the editor and enqueue your fonts for the admin too.
