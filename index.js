let ul = document.querySelector("nav ul") ;
let btn = document.querySelector("nav .btn") ;

btn.onclick = () => {
    if(ul.classList.contains("flex") === true) {
        ul.style.display = "none"
        ul.classList.remove("flex")
    }else {
        ul.classList.add("flex")
        ul.style.display = "flex"
    }
}