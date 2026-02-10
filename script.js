let lastScroll = 0;
const delta = 10;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (Math.abs(currentScroll - lastScroll) <= delta) return;

    if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add('header--hidden');
    } else {
        header.classList.remove('header--hidden');
    }

    lastScroll = currentScroll;
});
