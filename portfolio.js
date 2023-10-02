document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function highlightNavLink() {
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                navLinks.forEach((link) => link.classList.remove("active"));
                navLinks[index].classList.add("active");
            }
        });
    }
    

    window.addEventListener("scroll", highlightNavLink);
});




