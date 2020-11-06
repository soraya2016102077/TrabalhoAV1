//create map
const map = L.map('mapid').setView([-22.8669233, -43.4393685], 14);

//create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  
})


let marker;

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name = lat]').value = lat;
    document.querySelector('[name = lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker)

    //add icon tileLayer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)

})

// //create and add marker
// L.marker([-22.8669233, -43.4393685], { icon })
// .addTo(map)

//photos campo add
function addPhotoField(){
  // pegar o container de fotos #images
  const container = document.querySelector('#images')
  //pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll('.new-upload')
  //realizar o clone da ultima imgaem adicionada
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

  //verificar campo vazio, se sim não add container
  const input = newFieldContainer.children[0]
  if (input.value == "" ){
    return
  }
  //limpoar o campo
  input.value = ""
  //adicionar o clone ao container de #images
  container.appendChild(newFieldContainer)

}

function deleteField(event){
  const span = event.currentTarget

  const fieldsContainer = document.querySelectorAll('.new-upload')

  if(fieldsContainer.length <= 1){
    //limpar o valor do campo
    span.parentNode.children[0].value = ""
    return
  }

  //deletar o campo
  span.parentNode.remove();

}