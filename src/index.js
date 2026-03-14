import "./styles.css";


// Checks for animation timeline support on current browser
if (!CSS.supports('animation-timeline', 'scroll()')) {
    const script = document.createElement('script');
    script.src = 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';
    document.head.appendChild(script);
}