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

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetTabId = this.getAttribute('data-tab');
            const targetContent = document.getElementById(targetTabId);

            document.querySelectorAll('.tab-content').forEach(content => {
                content.style.display = 'none';
                content.classList.remove('active');
            });

            tabButtons.forEach(button => button.classList.remove('active'));

            if (targetContent) {
                targetContent.style.display = 'flex';
                targetContent.classList.add('active');
            }

            this.classList.add('active');
        });
    });

    const toggleButton = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');

    toggleButton.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
});