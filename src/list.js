$(document).ready(function () {
  $.get("http://localhost:3000/movies", function (movies) {
    const list = $("#list");

    movies.forEach(function (movie) {
      list.append(`
        <div class="w-full flex flex-col gap-4 pt-2">            
            <div class="w-full">
                <h2 class="text-xl">${movie.name}</h2>  
            </div>

            <div class="500">
                <p>${movie.description}</p>
            </div>
        </div>

      `);
    });
  });
});
