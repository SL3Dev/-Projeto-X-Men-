document.addEventListener('DOMContentLoaded', function () {
    const personagens = document.querySelectorAll('.personagem');

    personagens.forEach((personagem) => {
        personagem.addEventListener('mouseenter', () => {
            personagem.classList.add('selecionado');
        });

        personagem.addEventListener('mouseleave', () => {
            personagem.classList.remove('selecionado');

            const imagemPersonagemGrande = document.querySelector('.personagem-grande');
            const idPersonagem = personagem.attributes.id.value;

            imagemPersonagemGrande.src = `/src/imagens/card-${idPersonagem}.png`;

            const nomePersonagem = document.getElementById('nick-persona');
            nomePersonagem.innerText = personagem.getAttribute('data-name');

            // ...
const descricaoPersonagem = document.getElementById('description-persona');
descricaoPersonagem.innerText = personagem.getAttribute('data-description');
// ...

        });
    });
});
