$(document).ready(function () {
  // Set up default AJAX settings
  $.ajaxSetup({
    headers: {
      "Content-Type": "application/json",
    },
  });

  // When the document is ready, execute the function
  $.get("https://66776a33145714a1bd74af8c.mockapi.io/movie/movie", function (movies) {
    console.log(JSON.stringify(movies))
    // Hide the loading indicator
    $("#loading").hide();

    const list = $("#list"); // Select the element with id "list" where the movies will be added

    if (movies.length === 0) {
      list.append(`
        <div class="text-gray-900 text-xl mb-2">
            Lista Vazia.
        </div>
      `);
      return;
    }

    movies.forEach(function (movie) {
      // Iterate over each movie returned by the request
      list.append(`
        <div class="w-full max-w-full mb-5">
          <div class="border-r border-b border border-gray-400 bg-white rounded p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
              <div class="flex justify-between">
                <div class="text-gray-900 font-bold text-xl mb-2">${movie.name}</div>
                <button id="remove-${movie.id}" class="text-sm text-yellow-800">remover</button>
              </div>
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

      $(`#remove-${movie.id}`).on("click", function () {
        $.ajax({
          method: "DELETE",
          url: `https://66776a33145714a1bd74af8c.mockapi.io/movie/movie/${movie.id}`,
          success: function () {
            $(`#remove-${movie.id}`).closest('.max-w-sm').remove(); // Remove the movie element from the DOM
          },
          error: function () {
            alert('Erro ao remover o filme');
          }
        });
      });
    });
  });
});
