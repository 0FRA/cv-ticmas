const desplegar = document.getElementsByClassName("section-desplegable");
for(let elemento = 0; elemento < desplegar.length; elemento++) {
    desplegar[elemento].addEventListener("click", function(){
        this.classList.toggle("active")
        let content = this.nextElementSibling
        if(content.style.display === "block"){
            content.style.display = "none"
        }else{
            content.style.display = "block"
        }
    })
}