<?php
/**
 * Plugin Name: Tailwind Blocks
 * Plugin URI: https://marktiddy.co.uk
 * Description: A fork of Bricks this is a plugin that allows the creation of multiple tailwind based gutenberg blocks when creating custom WordPress themes
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

class CustomThemeBlocks {

    protected $pluginPrefix; 
    function __construct () {
        $this->pluginPrefix = 'tailwind-blocks'; //Update this each time you clone the theme
         add_action('admin_enqueue_scripts', [$this,'load_custom_wp_admin_style']);
         add_action('init',[$this,'register']);
    }

 //Enqueue and scripts
    function load_custom_wp_admin_style(){
	wp_enqueue_style('googlefonts','https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Sacramento&display=swap',array(),'1.0');
    }

    public function register()
        {
            


            wp_register_style(
                $pluginPrefix . '-style',
                plugin_dir_url(__FILE__).'public/css/plugin.css',
                is_admin() ? ['wp-editor'] : null,
                null
            );

            wp_register_style(
                $pluginPrefix . '-editor-style',
                plugin_dir_url(__FILE__).'public/css/plugin.css',
                ['wp-edit-blocks'],
                null
            );

            wp_register_script(
                $pluginPrefix . '-script',
                plugin_dir_url(__FILE__).'public/js/plugin.js',
                ['wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'],
                null,
                true
            );

            register_block_type(
                'copy-by-kayleigh/block',
                [
                    'style'         => $pluginPrefix . '-style',
                    'editor_script' => $pluginPrefix . '-script',
                    'editor_style'  => $pluginPrefix . '-editor-style',
                ]
            );
        }
   }

$customThemeBlocks = new CustomThemeBlocks;