function mostrarPagina(id) {
    const paginas= document.querySelectorAll(".pagina");

    paginas.forEach(function(pagina) {
        pagina.classList.remove("ativa");
    });

    const paginaEscolhida = document.getElementById(id);

    if (paginaEscolhida) {
        paginaEscolhida.classList.add("ativa");
    }
}

console.log ("JavaScrpit carregado!");
