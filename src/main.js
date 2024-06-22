$(document).ready(function () {
  $("#add-button").on("click", function (event) {
    event.preventDefault();

    let isNameValid = false;
    let isRatingValid = false;
    let isDescriptionValid = false;

    const name = $("#name").val().trim();
    const description = $("#description").val().trim();
    const rating = $("#rating").val();

    if (name === "") {
      $("#name").addClass("border-red-500");
      $("#name_error").removeClass("invisible");
      isNameValid = false;
    } else {
      $("#name").removeClass("border-red-500");
      $("#name_error").addClass("invisible");
      isNameValid = true;
    }

    if (rating < 0 || rating > 10) {
      $("#rating").addClass("border-red-500");
      $("#rating_error").removeClass("invisible");
      isRatingValid = false;
    } else {
      $("#rating").removeClass("border-red-500");
      $("#rating_error").addClass("invisible");
      isRatingValid = true;
    }

    if (description === "") {
      $("#description").addClass("border-red-500");
      $("#description_error").removeClass("invisible");
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
        url: "http://localhost:3000/movies",
        data: JSON.stringify({ name, description, rating }),
        success: function () {
          window.location.href = "lista_filmes.html";
        },
      });
    }
  });
});
