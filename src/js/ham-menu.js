export default function toggleNavBar() {
    const toggleBtn = document.getElementsByClassName("toggle-btn")[0];
    const navLinks = document.getElementsByClassName("nav-links-container")[0];
    const navLinksAnchor = document.getElementsByClassName("nav-anchor");
    
    toggleBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    })

    for (var i=0; i < navLinksAnchor.length; i++) {
        navLinksAnchor[i].addEventListener("click", () => {
            navLinks.classList.remove("active");
        })
    }
    
}
