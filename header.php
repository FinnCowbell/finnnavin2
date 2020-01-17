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
  <script src="https://kit.fontawesome.com/78fac8051a.js" crossorigin="anonymous"></script>
  <?php 
	function include_custom_jquery(){
    wp_enqueue_script( 'smoothScroll', get_template_directory_uri() . '/js/smooth-scroll.polyfills.min.js', array(), null, true);
    wp_enqueue_script( 'banner', get_template_directory_uri() . '/js/banner.js', array('smoothScroll'), null, true);
    wp_enqueue_script( 'checkItOut', get_template_directory_uri() . '/js/checkItOut.js', array(), null, true);
	}
	add_action('wp_enqueue_scripts', 'include_custom_jquery'); 
	?>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'finnnavin2' ); ?></a>
    <?php
    if ( is_front_page() || is_home() ) :
    ?>
	<header id="billboard">
    <div id="autoplay-bar"></div> 
    <div class="backdrop">
      <video id="backdrop-video" width="auto" height="100%">
        <source src="wp-content/themes/finnnavin2/media/ss.webm"></source>
      </video>
    </div>
		<div class="my-name">
      <h1>
        <a class="" href="/">
          Finn<span id="space"> </span>Nav<span id="dot"><span id="shrink-dot">.</span></span><span id="in">in</span>
        </a>
      </h1>
    </div><!-- .his-name -->
    <div class="controls">
      <nav id="billboard-nav">
        <?php
        wp_nav_menu( array(
          'theme_location' => 'menu-1',
          'menu_id'        => 'primary-menu',
        ) );
        ?>
      </nav>
      <button id="remote">
        <?php 
          include('media/pause.svg');
          include('media/play.svg');
        ?>
      </button>
    </div>
  </header>
  <div class="billboard-padding"></div>
	<?php
	endif;?>
  <header id="menu-banner" class="hidden">
    <h2 class="site-title">
      <a href="<?php echo esc_url( home_url( '/#top' ) ); ?>" rel="home">
      Finn Navin
      </a>
    </h2> 
		<nav id="site-navigation" class="main-navigation">
			<button class="menu-toggle" style="display:none;"aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( '≡', 'finnnavin2' ); ?></button>
			<?php
			wp_nav_menu( array(
				'theme_location' => 'menu-1',
				'menu_id'        => 'primary-menu',
			) );
			?>
		</nav><!-- #site-navigation -->
  </header>
	<div id="content" class="site-content">
  <?php
    if ( is_front_page() || is_home() ) :
      include('front-page/index.php');
  endif; ?>