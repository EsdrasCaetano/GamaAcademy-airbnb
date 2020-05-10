
const url = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72/"
const card = document.getElementById('cards')
fetch(url)
    .then(response =>
        response.json()
    )
    .then(data => {
        cardData(data)
    })
    .catch(err => console.log(err))

function cardData(data) {
    card.innerHTML = "";
    data.map(renderCard)
}
function renderCard(data) {
    const div = document.createElement('div')
    div.className = 'col-md-4'
    div.innerHTML = `
    <div class="card">
        <img class="card-img-top" src="${data.photo}" alt="${data.name}" style="">
        <div clas="card-body"  style="padding: 1em; border-radius: 20px" >
          <h5 class="card-title title">${data.property_type}</h5>
          <p class="card-text" style="height: 3em">${data.name}</p>
          <p class="card-text">R$: <strong>${data.price}</strong>/noite</p>
      </div>
    </div>
    `
    card.appendChild(div)
}