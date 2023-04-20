const burguer = document.querySelector('.burguer');
const nav = document.querySelector('header nav')
const menu = document.querySelectorAll(" #menu a")

function closemenu(){
    nav.classList.remove('active')
}

function toggle(event){
if(event.type === 'touchstart') event.preventDefault();
if(!nav.classList.contains('active')){
    nav.classList.add('active');
}else{
    closemenu();
}

}

burguer.addEventListener('click',toggle);
burguer.addEventListener('touchstart',toggle);


menu.forEach((menu) => menu.addEventListener('click', () => closemenu()));







 var swiper = new Swiper(".swiper-container", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


// barra de pesquisa



//Ejecutando funciones
document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

//Declarando variables
search_btn = document.querySelector('.search-btn');
icon_search = document.getElementById('icon-search')
search_box =document.querySelector(".search-box");
cover_ctn_search =document.getElementById("cover-ctn-search");
text_input = document.getElementById("text-input");
box_search = document.getElementById("box-search");


//Funcion para mostrar el buscador
function mostrar_buscador(){
    icon_search.style.color = 'black'
    search_btn.style.backgroundColor = 'white';
   text_input.style.padding = '8px '
    text_input.style.width = '230px';
    cover_ctn_search.style.display = "block";
    text_input.focus();

    if (text_input.value === ""){
        box_search.style.display = "none";
    }

}

//Funcion para ocultar el buscador
function ocultar_buscador(){
    icon_search.style.color = ''
    search_btn.style.backgroundColor = '';
    text_input.style.padding = '0 '
    text_input.style.width = '0';
    cover_ctn_search.style.display = "none";
    text_input.value = "";
    box_search.style.display = "none";

}


//Creando filtrado de busqueda

document.getElementById("text-input").addEventListener("keyup", buscador_interno);

function buscador_interno(){


    filter = text_input.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    //Recorriendo elementos a filtrar mediante los "li"
    for (i = 0; i < li.length; i++){

        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){

            li[i].style.display = "";
            box_search.style.display = "block";

            if (text_input.value === ""){
                box_search.style.display = "none";
            }

        }else{
            li[i].style.display = "none";
        }

    }



}





