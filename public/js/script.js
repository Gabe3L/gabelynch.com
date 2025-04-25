// Sitewide Animations

document.addEventListener('DOMContentLoaded', function () {
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < window.innerHeight &&
            rect.bottom >= 0
        );
    }

    function initializeScrollAnimations() {
        const elements = document.querySelectorAll('.animate-on-scroll');

        elements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('fade-in-up');
            }
        });
    };

    window.addEventListener('scroll', initializeScrollAnimations);
    window.addEventListener('load', initializeScrollAnimations);

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

    if (toggleButton && menu) {
        toggleButton.addEventListener('click', function () {
            menu.classList.toggle('show');
        });
    } else {
        console.error('Toggle button or menu not found in the DOM.');
    }
});