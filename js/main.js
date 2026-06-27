// Reveal.js initialization — tuned for online / screen-share presenting
Reveal.initialize({
  width: 1280,
  height: 720,
  margin: 0.02,
  minScale: 0.2,
  maxScale: 1.5,
  disableLayout: false,

  hash: true,            // deep-link to slides via URL
  controls: true,
  controlsLayout: 'bottom-right',
  progress: true,
  slideNumber: 'c/t',    // current / total
  center: false,         // we control vertical layout via CSS
  transition: 'slide',   // slide | fade | convex | none
  transitionSpeed: 'default',
  backgroundTransition: 'fade',

  keyboard: true,
  touch: true,
  overview: true,        // press ESC for slide overview
});
