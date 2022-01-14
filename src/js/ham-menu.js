export default function toggleNavBar() {
    const toggleBtn = document.getElementsByClassName("toggle-btn")[0];
    const navLinks = document.getElementsByClassName("nav-links-container")[0];
    const navLinksAnchor = document.getElementsByClassName("nav-anchor");

    //menghapus class active dan mengubah display ke non kalau
    //nav-link-containernya masih kebuka trus screen nya jadi lebar
    //klo pake display block sama none, ga bisa pake transition
    //klo pake visibility bisa pake transition & menyembunyikan teks dari screen reader
    const smallBp = window.matchMedia("(min-width: 40em)");
    function displayBlock(x) {
        if (!(x.matches && navLinks.classList.contains("active"))) {
            return;
        } else {
            navLinks.classList.remove("active");
            // navLinks.style.display = "none";
            navLinks.style.visibility = "hidden";
            console.log("x matches");
        }
    }
    smallBp.addEventListener("change", displayBlock);
    displayBlock(smallBp);

    //toggle ham menu
    toggleBtn.addEventListener("click", () => {
        if (navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
            // navLinks.style.display = "none";
            navLinks.style.visibility = "hidden";
            toggleBtn.setAttribute("aria-expandend", "false");
        } else {
            navLinks.classList.add("active");
            // navLinks.style.display = "block";
            navLinks.style.visibility = "visible";
            toggleBtn.setAttribute("aria-expandend", "true");
        }
    });

    //tutup ham menu klo link di klik
    for (var i = 0; i < navLinksAnchor.length; i++) {
        navLinksAnchor[i].addEventListener("click", () => {
            navLinks.classList.remove("active");
            // navLinks.style.display = "none";
            navLinks.style.visibility = "hidden";
        });
    }
}
