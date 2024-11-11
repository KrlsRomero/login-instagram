export function animationLogin() {
    const $inputs = document.querySelectorAll(".form__input") 
    const $labels = document.querySelectorAll(".form__label") 
    $inputs.forEach((input, index) => {
        $input.addEventListener("input", () => {
            const texto = $input.value
            $labels[index]?.classList.toggle("form__label--active", texto.trim() != "")
            $input?.classList.toggle("form__input--active", texto.trim() != "")
        });
    });
}