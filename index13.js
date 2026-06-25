//https://dog.ceo/api/breeds.image/random
fetch('https://apis.scrimba.com/dog.ceo/api/breeds/images/random')
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
   //rejected promise await and async
//       try{
//const response = await fetch('https://dog.ceo/api/breeds/image/random');
   //const data = await response.json();
   //const imgElement = document.createElement('img');
   //imgElement.src = data.message;
   //imgElement.alt = 'Random Dog Image';
   //document.getElementById('img-container').appendChild(imgElement);
//       }
//       catch(error){

//           console.error("An error occurred:", error);
//       }finally{
//           console.log("Execution completed.");
//       }
// another way to deal with the error is the response.ok property, which indicates whether the response was successful (status code in the range 200-299) or not. You can check this property before attempting to parse the response as JSON. If the response is not ok, you can throw an error or handle it accordingly.
// 400 not found 200-299 true 300-399 redirect 500-599 server error
// if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
// }