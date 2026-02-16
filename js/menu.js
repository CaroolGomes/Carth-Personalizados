document.querySelectorAll(".dropdown").forEach(drop => {

    drop.addEventListener("mouseenter", () => {
        drop.classList.add("ativo");
    });

    drop.addEventListener("mouseleave", () => {
        drop.classList.remove("ativo");
    });

});
