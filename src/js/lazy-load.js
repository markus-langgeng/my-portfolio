export default function lazyLoadingObserver() {
    const images = document.querySelectorAll("[data-lazy]");

    const imageOpts = {
        threshold: 0,
        rootMargin: "0px 0px 400px 0px",
    };

    function preloadImage(img) {
        const src = img.getAttribute("data-lazy");
        if (!src) {
            return;
        }
        img.src = src;
        img.removeAttribute("data-lazy");
    }

    const imageObserver = new IntersectionObserver((entries, imageObserver) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                console.log(entry);
                return;
            } else {
                console.log(entry);
                preloadImage(entry.target);
                imageObserver.unobserve(entry.target);
            }
        });
    }, imageOpts);

    images.forEach((image) => {
        imageObserver.observe(image);
    });
}
