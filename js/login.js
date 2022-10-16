// Example starter JavaScript for disabling form submissions if there are invalid fields
"use strict";
document.addEventListener("DOMContentLoaded", function (event) {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var validUser = false;
        if (
          email.toLowerCase() === "shilpa.shreeramapp@gmail.com" &&
          password === "shilpa@123"
        ) {
          validUser = true;
        }
        if (!form.checkValidity() || !validUser) {
          event.preventDefault();
          event.stopPropagation();

          if (!validUser) {
            var invalidateCredentials =
              document.getElementById("invalidCredentials");
            invalidateCredentials.classList.remove("d-none");
          }
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
});
