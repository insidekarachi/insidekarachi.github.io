window.addEventListener('scroll', function () {
    const header = document.querySelector('header.hero');
    header.style.opacity = 1 - window.scrollY / 600;
});
