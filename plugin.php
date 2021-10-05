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
        add_filter('block_categories_all',[$this,'create_block_categories'],10,2);

    }

 //Enqueue and scripts
    function load_custom_wp_admin_style(){
	wp_enqueue_style('googlefonts','https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Sacramento&display=swap',array(),'1.0');
    wp_enqueue_style('fontawesome','https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css',array(),'1.0');

    }

    public function register()
        {
            


            wp_register_style(
                $this->pluginPrefix . '-style',
                plugin_dir_url(__FILE__).'public/css/plugin.css',
                is_admin() ? ['wp-editor'] : null,
                null
            );

            wp_register_style(
                $this->pluginPrefix . '-editor-style',
                plugin_dir_url(__FILE__).'public/css/plugin.css',
                ['wp-edit-blocks'],
                null
            );

            wp_register_script(
                $this->pluginPrefix . '-script',
                plugin_dir_url(__FILE__).'public/js/plugin.js',
                ['wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'],
                null,
                true
            );

            register_block_type(
                $this->pluginPrefix.'/block',
                [
                    'style'         => $this->pluginPrefix . '-style',
                    'editor_script' => $this->pluginPrefix . '-script',
                    'editor_style'  => $this->pluginPrefix . '-editor-style',
                ]
            );
        }

        function create_block_categories( $categories, $post ) {

        return array_merge(
            $categories,
            array(
                array(
                    'slug' => $this->pluginPrefix . '-blocks',
                    'title' => __('Tailpress Blocks', $this->pluginPrefix . '-blocks'),
                    'icon'  => 'dashicons-admin-appearance',
                ),
            )
        );

        }
   }

$customThemeBlocks = new CustomThemeBlocks;