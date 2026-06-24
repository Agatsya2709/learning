//https://dog.ceo/api/breeds.image/random
fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())//.json to convert the json file to js
  .then(data => {console.log(data)
    
    const imgElement = document.createElement('img');
    imgElement.src = data.message;
   
    imgElement.alt = 'Random Dog Image';
    document.getElementById('img-container').appendChild(imgElement);
});
//async function fetchDogImage() {
   //const response = await fetch('https://dog.ceo/api/breeds/image/random');
   //const data = await response.json();