
function sendMail() {
    emailjs.init("user_untL5prVDjp4pK5tR"); // Closing double quote was missing here

    var form = document.getElementById("contact-form");
    var data = new FormData(form);

    emailjs.sendForm("service_s8ekvwl", "template_93j1f9o", data)
      .then(
        function(response) {
          console.log("Email sent successfully:", response);
          // You can add additional actions here, such as showing a success message
        },
        function(error) {
          console.log("Failed to send email:", error);
          // You can add additional actions here, such as showing an error message
        }
      );

    return false; // Prevent the default form submission
  }
