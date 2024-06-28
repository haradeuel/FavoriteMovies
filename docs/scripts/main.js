$(document).ready(function () {
  $("#add-button").on("click", function (event) {
    event.preventDefault();

    $(this).prop("disabled", true);
    $(this).addClass("opacity-50 cursor-not-allowed");

    let isNameValid = false;
    let isRatingValid = false;
    let isDescriptionValid = false;

    const name = $("#name").val().trim();
    const description = $("#description").val().trim();
    const rating = $("#rating").val();

    // Regex patterns for validation
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/; // Allows letters and spaces
    const ratingRegex = /^(?:10|\d(?:\.\d)?)$/; // Allows ratings from 0 to 10 with optional decimal
    const descriptionRegex = /.+/; // Allows any non-empty description

    // Validate name
    if (name === "" || !nameRegex.test(name)) {
      $("#name").addClass("border-red-500");
      $("#name_error")
        .removeClass("invisible")
        .text("O campo não pode ser vazio");
      isNameValid = false;
    } else {
      $("#name").removeClass("border-red-500");
      $("#name_error").addClass("invisible");
      isNameValid = true;
    }

    // Validate rating
    if (rating === "" || !ratingRegex.test(rating)) {
      $("#rating").addClass("border-red-500");
      $("#rating_error")
        .removeClass("invisible")
        .text("Insira uma nota válida (0 to 10)");
      isRatingValid = false;
    } else {
      $("#rating").removeClass("border-red-500");
      $("#rating_error").addClass("invisible");
      isRatingValid = true;
    }

    // Validate description
    if (description === "" || !descriptionRegex.test(description)) {
      $("#description").addClass("border-red-500");
      $("#description_error")
        .removeClass("invisible")
        .text("O campo descrição não pode ser vazio");
      isDescriptionValid = false;
    } else {
      $("#description").removeClass("border-red-500");
      $("#description_error").addClass("invisible");
      isDescriptionValid = true;
    }

    const isValid = isNameValid && isRatingValid && isDescriptionValid;

    if (isValid) {
      $.ajax({
        method: "POST",
        url: "https://66776a33145714a1bd74af8c.mockapi.io/movie/movie",
        headers: {
          "Content-Type": "application/json",
          "X_Jsio-Token": "217d9982b6e36f225a5e9e7566a47233",
        },
        data: JSON.stringify({ name, description, rating }),
        success: function (response) {
          window.location.replace("lista_filmes.html");
        },
      });
    }

    $(this).prop("disabled", false);
    $(this).removeClass("opacity-50 cursor-not-allowed");
  });
});
