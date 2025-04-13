const tabButtons = document.querySelectorAll('.tab-button');
  
tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        const tabContents = document.querySelectorAll('.tab-content');

        tabContents.forEach(content => {
            content.style.display = 'none';
            content.classList.remove('active');
        });

        tabButtons.forEach(btn => btn.classList.remove('active'));

        const targetTab = this.getAttribute('data-tab');
        const targetTabContent = document.getElementById(targetTab);
        targetTabContent.style.display = 'flex';
        targetTabContent.classList.add('active');

        this.classList.add('active');
    });
});