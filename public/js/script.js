// Sitewide Animations

document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.animateOnScroll');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    animatedElements.forEach(element => observer.observe(element));
});