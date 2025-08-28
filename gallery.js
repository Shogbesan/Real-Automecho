(function slider(root) {
const slider = document.getElementById('slider-box');
const track = slider.querySelector('.slidess');
const slides = Array.from(track.children);
const dotsWrap = slider.querySelector('.dots');


let index = 0;
const last = slides.length - 1;


// Build dots
slidess.forEach((_, i) => {
const b = document.createElement('button');
b.className = 'dot';
b.type = 'button';
b.setAttribute('aria-label', `Go to slide ${i + 1}`);
b.addEventListener('click', () => go(i));
dotsWrap.appendChild(b);
});


const dots = Array.from(dotsWrap.children);


function update() {
track.style.transform = `translateX(-${index * 100}%)`;
dots.forEach((d, i) => d.setAttribute('aria-current', i === index ? 'true' : 'false'));
}


function go(i) {
index = (i + slides.length) % slides.length; // wrap around
update();
}


prev.addEventListener('click', () => go(index - 1));
next.addEventListener('click', () => go(index + 1));


// Keyboard support
slider.addEventListener('keydown', (e) => {
if (e.key === 'ArrowLeft') go(index - 1);
if (e.key === 'ArrowRight') go(index + 1);
});
slider.tabIndex = 0; // make focusable for keyboard


// Basic touch swipe for mobile
let startX = 0;
let deltaX = 0;
let dragging = false;


const onStart = (x) => {
dragging = true; startX = x; deltaX = 0;
track.style.transition = 'none';
};
const onMove = (x) => {
if (!dragging) return;
deltaX = x - startX;
track.style.transform = `translateX(${-index * 100 + (deltaX / slider.clientWidth) * 100}%)`;
};
const onEnd = () => {
track.style.transition = 'transform 420ms ease-in-out';
if (!dragging) return; dragging = false;
const threshold = slider.clientWidth * 0.18; // 18% swipe to change
if (deltaX > threshold) go(index - 1);
else if (deltaX < -threshold) go(index + 1);
else update();
};


slider.addEventListener('touchstart', (e) => onStart(e.touches[0].clientX), { passive: true });
slider.addEventListener('touchmove', (e) => onMove(e.touches[0].clientX), { passive: true });
slider.addEventListener('touchend', onEnd);


Optional autoplay (uncomment to enable)
let timer = setInterval(() => go(index + 1), 5000);
slider.addEventListener('pointerenter', () => clearInterval(timer));
slider.addEventListener('pointerleave', () => timer = setInterval(() => go(index + 1), 5000));


update();
})();