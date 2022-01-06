export default function navbarObserver() {
    const header = document.querySelector("header");
    const lightBgs = document.querySelectorAll(".light-bg");

    const faders = document.querySelectorAll(".fade-in");

    const lightBgOpt = {
        rootMargin: "-53px 0px -90% 0px",
    };
    const appearOpts = {
        threshold: 0.7,
        rootMargin: "0px 0px -100px 0px",
    };

    const lightBgObserver = new IntersectionObserver(function (
        entries,
        lightBgObserver
    ) {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                header.classList.remove("nav-scrolled-light");
            } else {
                header.classList.add("nav-scrolled-light");
            }
        });
    },
    lightBgOpt);

    lightBgs.forEach((lightBg) => {
        lightBgObserver.observe(lightBg);
    });

    const appearOnScroll = new IntersectionObserver(function (
        entries,
        appearOnScroll
    ) {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
    appearOpts);

    faders.forEach((fader) => {
        appearOnScroll.observe(fader);
    });
}
