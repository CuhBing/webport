document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.content-link');
    const contentBar = document.querySelector('.content-bar');
    const excludedSections = ['welcome']; // Sections where the content bar is hidden

    const highlightCurrentSection = () => {
        let currentSectionId = '';

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        // Show or hide the content bar
        if (excludedSections.includes(currentSectionId)) {
            contentBar.style.display = 'none';
        } else {
            contentBar.style.display = 'block';
        }

        // Highlight the active link and expand the line
        navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSectionId)) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', highlightCurrentSection);
    highlightCurrentSection(); // Initial call to set the state on page load
});
