export function iniciarMenu(){

    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {

        dropdown.addEventListener("mouseenter", () => {
            dropdown.classList.add("ativo");
        });

        dropdown.addEventListener("mouseleave", () => {
            dropdown.classList.remove("ativo");
        });

    });

}
