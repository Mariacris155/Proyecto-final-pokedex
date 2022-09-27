



function buscarPokemon() {
  let input = document.getElementById('texto').value
  fetch(`https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}/`).then(respuesta => respuesta.json()).then(datos => {
     console.log(datos)

     if (Array.length > 0) {
        document.getElementById("poke-card").innerHTML = `<ul class = "cardList">
                
        <li class = "nombrePokemon">${datos.name}</li>
        <img src="${datos.sprites["front_default"]}" alt="">
        <li>Id: ${datos.id}</li>
        <li>weight: ${datos.weight}Kg</li>
        <li>height: ${datos.height}M</li>
        <li>types: ${datos.types [0].type.name}</li>
        </ul>
        `

       
        

     }else {

        document.getElementById("poke-card").innerHTML = `<p>ese pokemon no esta en la lista</p>`
     }


  }).catch(function(error) {
   document.getElementById("poke-card").innerHTML = `<p class = "mensajerror">Ese pokemon no esta en la lista, por favor introduce un nombre válido</p>`;
 });



}
