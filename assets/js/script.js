let dados = [{
  "artistas": [
    {
      "id": 0,
      "nome": "Travis Scott",
      "ouvintes": 1000000,
      "generos": ["Trap", "Hip Hop"],
      "imagem_perfil": "assets/img/img9.png",
      "descricao": "Travis Scott é um dos principais nomes do trap moderno, conhecido por unir batidas intensas, estética psicodélica e performances explosivas ao vivo. Seu estilo inovador transformou o hip hop em um espetáculo visual e sonoro, influenciando toda uma geração de artistas."
    },
    {
      "id": 1,
      "nome": "Billie Eilish",
      "ouvintes": 950000,
      "generos": ["Pop", "Alternativo"],
      "imagem_perfil": "assets/img/img4.jpg",
      "descricao": "Billie Eilish combina uma voz suave e letras sombrias com produção minimalista, redefinindo o pop contemporâneo. Seu som íntimo e visual único criaram uma identidade artística que dialoga com o público jovem e inspira autenticidade."
    },
    {
      "id": 2,
      "nome": "The Weeknd",
      "ouvintes": 1200000,
      "generos": ["R&B", "Pop", "Synthwave"],
      "imagem_perfil": "assets/img/img5.jpg",
      "descricao": "The Weeknd mistura R&B moderno, pop e influências oitentistas em faixas marcadas por tons melancólicos e produções sofisticadas. Sua capacidade de equilibrar emoção e estética tornou-o um dos artistas mais influentes da música atual."
    },
    {
      "id": 3,
      "nome": "Kendrick Lamar",
      "ouvintes": 870000,
      "generos": ["Hip Hop", "Rap"],
      "imagem_perfil": "assets/img/img6.jpg",
      "descricao": "Kendrick Lamar é referência no rap consciente, misturando poesia, crítica social e técnica impecável. Suas letras profundas abordam temas como desigualdade, identidade e superação, consolidando-o como uma das vozes mais poderosas do hip hop."
    },
    {
      "id": 4,
      "nome": "Ariana Grande",
      "ouvintes": 1100000,
      "generos": ["Pop", "R&B"],
      "imagem_perfil": "assets/img/img7.jpg",
      "descricao" : "Ariana Grande se destaca por sua voz poderosa e versatilidade, transitando entre o pop e o R&B com naturalidade. Ícone da música contemporânea, suas canções misturam emoção, atitude e uma presença de palco marcante."
    },
    {
      "id": 5,
      "nome": "Post Malone",
      "ouvintes": 930000,
      "generos": ["Hip Hop", "Rock", "Pop"],
      "imagem_perfil": "assets/img/img8.jpg",
      "descricao": "Post Malone desafia rótulos ao combinar hip hop, rock e pop em um som único e emocional. Com melodias envolventes e letras sinceras, ele se tornou um dos artistas mais populares da atualidade, conhecido por sua autenticidade e estilo inconfundível."
    }
  ],
  "itensDestaque": [
    {
        "id" : 0,
        "imagem" : "assets/img/img1.jpg",
        "titulo" : "Artista em Alta",
        "descricao" : "Descubra o artista que está conquistando o público.",
        "descricao_detalhe" : "Travis Scott é um dos principais nomes do trap moderno, conhecido por unir batidas intensas, estética psicodélica e performances explosivas ao vivo. Seu estilo inovador transformou o hip hop em um espetáculo visual e sonoro, influenciando toda uma geração de artistas." 
    },
    {
        "id" : 1,
        "imagem" : "assets/img/img2.jpeg",
        "titulo" : "Album do Momento",
        "descricao" : "O lançamento mais comentado da semana. Veja por que todos estão ouvindo.",
        "descricao_detalhe" : "“Eu Ainda Tenho Coração” mostra o lado mais sensível de Leal, misturando rap e emoção em faixas que falam sobre amor, dor e superação. Um álbum intenso e autêntico, que prova que ainda há sentimento em meio ao caos." 
    },
    {
        "id" : 2,
        "imagem" : "assets/img/img3.png",
        "titulo" : "Faixa Popular",
        "descricao" : "A música que não sai das playlists mais tocadas da plataforma.",
        "descricao_detalhe" : "“Tanto Faz” de Sotam é uma faixa marcada por melancolia e reflexão. Com versos sinceros e flow leve, o artista fala sobre desapego e a calma de seguir em frente, mesmo quando as coisas já não importam tanto quanto antes."
    }

]
}]


let destaquesCarregados = false

function lerDestaques(){
    const carouselDestaques = document.getElementById("itemDestaque")
    if(!destaquesCarregados){
        carregarDestaques()
        destaquesCarregados = true
    }else{
        carouselDestaques.innerHTML = ""
        destaquesCarregados = false
    }
}

function carregarDestaques(){
    const carouselDestaques = document.getElementById("itemDestaque")
    dados[0].itensDestaque.forEach(item => {
        const carousel_item = document.createElement("div")
        carousel_item.className = "carousel-item active"

        carousel_item.innerHTML = `
            <div class="card bg-dark border border-dark-subtle mx-auto text-white" style="width: 22rem;">
            <img src="${item.imagem}" class="card-img-top" alt="Item 1">
            <div class="card-body text-center">
                <h5 class="card-title text-white">${item.titulo}</h5>
                <p class="card-text text-white-50">${item.descricao}</p>
                <a href="detalhes.html?detalhe=itens&id=${item.id}" class="btn btn-outline-light mt-2 custom-btn">Ver mais</a>
            </div>
        `
        carouselDestaques.appendChild(carousel_item)
    })
}

let artistasCarregados = false

function lerArtistas(){
    const destaqueArtistas = document.getElementById("artistasDestaque")
    if(!artistasCarregados){
        carregarArtistas()
        artistasCarregados = true
    }else{
        destaqueArtistas.innerHTML = ""
        noticiasCarregadas = false
    }
}

function carregarArtistas(){
    const destaqueArtistas = document.getElementById("artistasDestaque")

    dados[0].artistas.forEach(item => {
        const card = document.createElement("div")
        card.className = "col-10 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"

        card.innerHTML = `
        <div class="card bg-dark border border-dark-subtle text-white" style="width: 18rem;">
            <img src="${item.imagem_perfil}" class="card-img-top" alt="${item.nome}">
            <div class="card-body text-center">
            <h5 class="card-title"> ${item.nome}</h5>
            <p class="card-text mb-1"><strong>Ouvintes:</strong > ${item.ouvintes}</p>
            <p class="card-text"><strong>Gêneros:</strong> ${item.generos}</p>
            <a href="detalhes.html?detalhe=artista&id=${item.id}" class="btn btn-outline-light custom-btn mt-2">Ver detalhes</a>
            </div>
        </div>
        `
        destaqueArtistas.appendChild(card)

    })
}

lerDestaques()
lerArtistas()



