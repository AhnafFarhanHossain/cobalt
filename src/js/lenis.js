export function lenisInit() {
  // Initialize Lenis
  const lenis = new Lenis({
    duration: 1.2, // Smooth scrolling duration
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
    direction: "vertical", // Scroll direction (horizontal or vertical)
    smooth: true, // Enable smooth scrolling
  });

  // Update the scroll position
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
