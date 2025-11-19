// Highlight active page link
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = location.pathname.split("/").pop();

    document.querySelectorAll("nav a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.style.color = "#ff6b6b"; // highlight color
            link.style.fontWeight = "bold";
        }
    });
});
