<?php

//Plugin name: Animation-JF
//Description: Add some animation to your site.
//Version: 1.0
//Author: Juan Felipe Gomez
//Author URI: https://gomezjuanefe.github.io/

/* This file can use all the function we use on function.php */

function animation_plugin() {
  $script_url = plugin_dir_url(__FILE__);

  wp_enqueue_style('animation', $script_url.'/assets/css/styles.css', '', '1.0', 'all');
  wp_enqueue_script('custom', $script_url. '/assets/js/custom.js.'.'?v='.time(), array('jquery'), '1.0', true);
}

add_action('wp_enqueue_scripts' , 'animation_plugin');
