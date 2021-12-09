
// Unsplash API

const count = 10;
const apiKey = 'KmFwSgqjd09BQQB5EKEvk-6iTAdvkRj-AKbZbqZjecg';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`


//Toma fotos de la API de unsplash
async function getPictures() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    }   
    catch (error){
        //funcion a ejecutar
    }  
}


getPhotos();
