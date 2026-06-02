const container = document.getElementById("container");

fetch("vocaloid.json")
    .then(resp => {
        console.log(resp);
        return resp.json();
    })
    .then(vocaloid => {
        console.log(vocaloid);

        vocaloid.forEach(personagem => {
            container.innerHTML += `
                <div class="card">
                    <img src="${personagem.imagem}">
                    <h2>${personagem.nome}</h2>
                    <p>${personagem.popularidade}</p>
                </div>
            `;
        });
    })
    .catch(erro => console.error(erro));