$(document).ready(function () {
  $("#add-button").on("click", function (event) {
    event.preventDefault();

    let isValid = false;
    const name = $("#name").val().trim();
    const description = $("#description").val().trim();

    if (name === "") {
      $("#name").addClass("border-red-500");
      $("#name_error").removeClass("invisible");
      isValid = false;
    } else {
      $("#name").removeClass("border-red-500");
      $("#name_error").addClass("invisible");
      isValid = true;
    }

    if (description === "") {
      $("#description").addClass("border-red-500");
      $("#description_error").removeClass("invisible");
      isValid = false;
    } else {
      $("#description").removeClass("border-red-500");
      $("#description_error").addClass("invisible");
      isValid = true;
    }

    if (isValid) {
      console.log("Válido");

      $.ajax({
        method: "POST",
        url: "http://localhost:3000/movies",
        data: JSON.stringify({ name, description }),
        success: function () {
          window.location.href = "lista_filmes.html";
        },
      });
    }

    console.log(name);
    console.log(description);
  });
});
