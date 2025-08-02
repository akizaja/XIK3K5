document.addEventListener('mousemove', function(e) {
    const layers = document.querySelectorAll('.parallax-bg .layer, .moon');

    const x = (window.innerWidth - e.pageX * 2) / window.innerWidth;
    const y = (window.innerHeight - e.pageY * 2) / window.innerHeight;

    layers.forEach(layer => {

        const speed = layer.getAttribute('data-speed');


        const xMove = x * speed * 20;
        const yMove = y * speed * 20;

        layer.style.transform = `translateX(${xMove}px) translateY(${yMove}px)`;
    });
});

document.querySelectorAll('.ripple').forEach(el => {
    el.addEventListener('click', function (e) {
        const circle = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        circle.style.width = circle.style.height = size + 'px';
        circle.style.left = x + 'px';
        circle.style.top = y + 'px';
        circle.className = 'ripple-effect';

        this.appendChild(circle);

        setTimeout(() => circle.remove(), 600);
    });
});

function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}
