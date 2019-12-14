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
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'finnnavin2' ); ?></a>

	<header id="main-header" class="site-header">
		<div class="my-name">
			<?php
			// the_custom_logo();
			if ( is_front_page() && is_home() ) :
				?>
        <div class="logo-div" a=id="finn">Finn</div><!--
      	--><div class="logo-div" id="space" style="color:white;"> </div><!--
				--><div class="logo-div" id="nav">Nav</div><!--
  			--><div class="logo-div" id="dot"><!--
  			--><div class="logo-div" id="dot-shrink">.</div></div><!--	
      	--><div class="logo-div" id="in">in</div></a></h1>
				<?php
			else :
				?>
				<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
				<?php
			endif;?>
    </div><!-- .his-name -->
    
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
