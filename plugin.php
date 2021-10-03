<?php
/**
 * Plugin Name: Tailwind Blocks
 * Plugin URI: https://marktiddy.co.uk
 * Description: A fork of copy-by-kayleigh this is a plugin that allows the creation of multiple tailwind based gutenberg blocks when creating custom WordPress themes
 * Author: Mark Tiddy
 * Author URI: https://marktiddy.co.uk
 * Version: 1.0.0
 * License: MIT
 * License URI: https://github.com/marktiddy/tailwind-blocks/blob/master/LICENSE.md.
 */

namespace MarkTiddy\TailwindBlocks;

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

function register()
{
    $pluginPrefix = 'tailwind-blocks';

    \wp_register_style(
        $pluginPrefix . '-style',
        plugin_dir_url(__FILE__).'public/css/plugin.css',
        is_admin() ? ['wp-editor'] : null,
        null
    );

    \wp_register_style(
        $pluginPrefix . '-editor-style',
        plugin_dir_url(__FILE__).'public/css/plugin.css',
        ['wp-edit-blocks'],
        null
    );

    \wp_register_script(
        $pluginPrefix . '-script',
        plugin_dir_url(__FILE__).'public/js/plugin.js',
        ['wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'],
        null,
        true
    );

    \register_block_type(
        'copy-by-kayleigh/block',
        [
            'style'         => $pluginPrefix . '-style',
            'editor_script' => $pluginPrefix . '-script',
            'editor_style'  => $pluginPrefix . '-editor-style',
        ]
    );
}

\add_action('init', __NAMESPACE__.'\\register');
