// Sitewide Animations

(function ($) {
    function initializeScrollAnimations() {
		$('.ftco-animate').waypoint(function (direction) {
            const element = $(this.element);

			if (direction === 'down' && !element.hasClass('ftco-animated')) {
				element.addClass('item-animate');
				setTimeout(function () {
                    $('body .ftco-animate.item-animate').each(function (index) {
                        const item = $(this);

                        // Stagger each animation by 30ms
                        setTimeout(function () {
                            item.addClass('fadeInUp ftco-animated');
                        }, index * 20);
                    });
                }, 100);
			}

        }, {
            offset: '95%' // Trigger when the element is 95% into the viewport
        });
	};

    initializeScrollAnimations();
})(jQuery);

// Technology Buttons

const tabButtons = document.querySelectorAll('.tab-button');
  
tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        const targetTabId = this.getAttribute('data-tab');
        const targetContent = document.getElementById(targetTabId);

        document.querySelectorAll('.tab-content').forEach(content => {
            content.style.display = 'none';
            content.classList.remove('active');
        });

        tabButtons.forEach(btn => btn.classList.remove('active'));

        if (targetContent) {
            targetContent.style.display = 'flex';
            targetContent.classList.add('active');
        }

        this.classList.add('active');
    });
});