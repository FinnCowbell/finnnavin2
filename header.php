<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package FinnNavin2
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<link href="https://fonts.googleapis.com/css?
	family=Cabin|Ubuntu:300,400,500|Roboto+Mono|Roboto+Slab&display=swap" rel="stylesheet">
  <?php 
	add_action('wp_enqueue_scripts', 'include_custom_jquery'); 
	?>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'finnnavin2' ); ?></a>
    <?php
    if ( is_front_page() && is_home() ) :
    ?>
	<header id="billboard">
    <div id="backdrop">
      <video id="backdrop-video" width="auto" height="100%" autoplay>
        <source src="../../wp-content/uploads/ss.mp4"></source>
      </video>
    </div>
		<div class="my-name">
      <h1>
        <a class="" href="/">
          Finn<span id="space"> </span>Nav<span id="dot"><span id="shrink-dot">.</span></span><span id="in">in</span>
        </a>
      </h1>
    </div><!-- .his-name -->
    <nav id="billboard-nav">
      <?php
			wp_nav_menu( array(
				'theme_location' => 'menu-1',
				'menu_id'        => 'primary-menu',
			) );
			?>
    </nav>
  </header>
	<?php
	endif;?>
  <header id="menu-banner">
  <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">Finn Navin</a></h1> 
		<nav id="site-navigation" class="main-navigation">
			<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( 'Primary Menu', 'finnnavin2' ); ?></button>
			<?php
			wp_nav_menu( array(
				'theme_location' => 'menu-1',
				'menu_id'        => 'primary-menu',
			) );
			?>
		</nav><!-- #site-navigation -->
  </header>
	<div id="content" class="site-content">
