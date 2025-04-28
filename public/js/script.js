// Sitewide Animations

document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    animatedElements.forEach(element => observer.observe(element));

    // Technology Buttons

    const tabButtons = document.querySelectorAll('.tab-button');
    const toggleButton = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');

    if (window.innerWidth > 768) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function () {
                const targetTabId = this.getAttribute('data-tab');
                const targetContent = document.getElementById(targetTabId);

                document.querySelectorAll('.tab-content').forEach(content => {
                    content.style.display = 'none';
                });

                if (targetContent) {
                    targetContent.style.display = 'grid';
                }
            });
        });

        toggleButton.addEventListener('click', function () {
            menu.classList.toggle('show');
        });
    };
});