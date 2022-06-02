const titulo = document.getElementsByClassName("actividad")
const contenido = document.getElementsByClassName("contenido")

for(let i = 0; i < titulo.length; i++){
   titulo[i].addEventListener('click', () => {
      const comprobacion = titulo[i].getAttribute("class")
      if(comprobacion == "actividad inactivo"){
         titulo[i].classList.remove("inactivo")
         titulo[i].classList.add("activo")
         contenido[i].style.display = "block"
      } else {
         titulo[i].classList.remove("activo")
         titulo[i].classList.add("inactivo")
         contenido[i].style.display = "none"
      }
   })
}