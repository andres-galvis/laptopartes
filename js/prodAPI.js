let productosGenerales = [

    {
        img: 'img/slide/img2.jpg',
        titulo: "AMD Ryzen 3200G",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vel distinctio consequuntur molestiae consectetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, amet, placeat accusamus laudantium maiores...",
        precio: "$1'600.000"
    },

    {
        img: 'img/slide/img1.jpg',
        titulo: "AMD Ryzen 3200G",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vel distinctio consequuntur molestiae consectetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, amet, placeat accusamus laudantium maiores...",
        precio: "$1'600.000"
    },

    {
        img: 'img/slide/img3.jpg',
        titulo: "AMD Ryzen 3200G",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vel distinctio consequuntur molestiae consectetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, amet, placeat accusamus laudantium maiores...",
        precio: "$1'600.000"
    },

    {
        img: 'img/slide/img1.jpg',
        titulo: "AMD Ryzen 3200G",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vel distinctio consequuntur molestiae consectetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, amet, placeat accusamus laudantium maiores...",
        precio: "$1'600.000"
    },

]

function renderProductos(arrayProductos) {
    
    const cardsContenedora = document.getElementById("destacados")
    cardsContenedora.innerHTML = ''
    
    arrayProductos.forEach(elementoDelArray => {
        cardsContenedora.innerHTML += ` 
        <div class="card">
                <div class="imgCard">
                    <img src="${elementoDelArray.img}" alt="">
                </div>
                <div class="tituloCard">
                    <h4>${elementoDelArray.titulo}</h4>
                </div>
                <div class="textoCard">
                    <p>
                        ${elementoDelArray.descripcion}
                    </p>
                </div>
                <div class="buttons">
                    <a href="#" target="blank"><button class="buttonComprar">Comprar</button></a>
                    <a href="#"><button class="buttonDetalles">Ver detalles</button></a>
                </div>
            </div>`;
    });
}

renderProductos(productosGenerales)

/* <div class="modal_container">
            <img src="${elementoDelArray.img}" alt="" id="${elementoDelArray.id}">
            <h3>Nombre:${elementoDelArray.nombre}</h3>
            <!--<h3>Tamaño:${elementoDelArray.tecnica}</h3>-->
            <h3>Precio:${elementoDelArray.precio}</h3>
            <h3>Técnica:${elementoDelArray.tecnica}</h3>
        </div> */