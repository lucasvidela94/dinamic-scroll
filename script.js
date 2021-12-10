const imageContainer  = document.getElementById('contenedor-imagen');
const loader = document.getElementById('loader');

let photosArray = [];


// Unsplash API

const count = 10;
const apiKey = 'KmFwSgqjd09BQQB5EKEvk-6iTAdvkRj-AKbZbqZjecg';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

//Crear elementos para links y fotos.Al resultado añadirlo al DOM

function showPhotos(){
    //El for each se aplica para el array de fotos y lo añade al mismo

    photosArray.forEach((photo) => {
        //Crea un elemento a para linkear con Unsplash
        const item = document.createElement('a');
        item.setAttribute('href' , photo.links.html);
        item.setAttribute('target' , '_blank');

        //Crea un elemento img para la foto 
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular );
        img.setAttribute('alt' , photo.alt_description);
        img.setAttribute('title' ,photo.alt_description);
        //Poner el elemento img dentro de el elemennto A y todo eso ponerlo dentro de imageContainer(contenedor de imagenes)
        item.appendChild(img);
        imageContainer.appendChild(item)

    });
    

}

//Toma fotos de la API de unsplash
async function getPictures() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        showPhotos();
    }   
    catch (error){
        //funcion a ejecutar
    }  
}


getPictures();
