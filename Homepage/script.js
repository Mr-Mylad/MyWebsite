console.log('Welcome to the homepage!');

for (Item in document.getElementsByClassName('Me')) {
    document.getElementsByClassName('Me')[Item].onclick = ItIsMe
}

function ItIsMe() {
    Random = Math.round(Math.random(0, 1));
    if (Random == 0) {
        alert('Ouch! Don\'t poke me!');
    } else {
        alert('Hi! It\'s me!');
    }
}

function Twitter() {
    open('https://www.twitter.com/@RealMrMylad')
}

function Youtube() {
    open('https://www.youtube.com/@MrMylad')
}

function Itch() {
    open('https://mylad.itch.io')
}

// Smooth scroll code
function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
  
    function scroll(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const scrollAmount = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, scrollAmount);
      if (timeElapsed < duration) requestAnimationFrame(scroll);
    }
  
    function easeInOutQuad(t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
    }
  
    requestAnimationFrame(scroll);
  }

  const smoothScrollLinks = document.querySelectorAll('.MenuAnchors');

smoothScrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const duration = 100;
    smoothScroll(target, duration);
  });
});
