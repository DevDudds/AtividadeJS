const container = document.getElementById("container");
let id = 0;
fetch("vocaloid.json")
    .then(resp => resp.json())
    .then(vocaloids => {
        id++;
        container.innerHTML = vocaloids.map((personagem, index) => `
            <div class="card" id="card-${index + 1}">
                <img src="${personagem.imagem}" alt="">
                <h2>${personagem.nome}</h2>
                <p>${personagem.popularidade}</p>
            </div>
        `).join("");
    })
    .catch(erro => console.error(erro));