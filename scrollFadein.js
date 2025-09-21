document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll(
        ".profile_content, .project1_content, .project2_content"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                const ratio = entry.intersectionRatio;

                if (ratio > 0.01) {  
                    entry.target.classList.add("show");
                } else {  
                    entry.target.classList.remove("show");
                }
            });
        },
        {
            threshold: [0.01]
        }
    );

    targets.forEach(target => observer.observe(target));
});