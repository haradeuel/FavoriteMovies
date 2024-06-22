$(document).ready(function () {
  // Quando o documento estiver pronto, executar a função
  $.get("http://localhost:3000/movies", function (movies) {
    // Fazer uma requisição GET para obter os filmes da URL local

    $("#loading").hide();

    const list = $("#list"); // Seleciona o elemento com id "list" onde os filmes serão adicionados

    movies.forEach(function (movie) {
      // Itera sobre cada filme retornado pela requisição

      list.append(`
        <div class="max-w-sm w-full max-w-full mb-5">
          <div class="border-r border-b border border-gray-400 bg-white rounded p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
              <div class="text-gray-900 font-bold text-xl mb-2">${movie.name}</div>
              <p class="text-gray-700 text-base">${movie.description}</p>
            </div>

            <div class="flex items-center">
                <div class="text-sm">
                <p class="text-gray-900 leading-none">Nota: ${movie.rating}</p>                
              </div>
            </div>
          </div>
        </div>
      `);
    });
  });
});
