const scrollUpButton = document.getElementById("up-arrow");

scrollUpButton.addEventListener("click", () =>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});