const container = document.getElementById("container");
let id = 0;
fetch("vocaloid.json")
.then(resp => resp.json())
.then(vocaloid => {
    vocaloid.map(personagem =>{
        id++;
        container.innerHTML +=
        `
        <div class="card" id="card-${id}">
            <img src="${personagem.imagem}" alt="">
            <h2>${personagem.nome}</h2>
            <p>${personagem.popularidade}</p>
        </div>
        `
    })
})
.catch( erro => console.log(erro))