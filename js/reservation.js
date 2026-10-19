// Builds a prefilled mailto: link from the reservation form, since the
// static site has no backend to accept bookings directly.
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("reservation-form");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = form.name.value.trim();
    var email = form.email.value.trim();
    var phone = form.phone.value.trim();
    var partySize = form.partySize.value.trim();
    var date = form.date.value;
    var time = form.time.value;
    var notes = form.notes.value.trim();

    var subject = "Reservation Request: " + name + " (" + partySize + " guests)";
    var bodyLines = [
      "Name: " + name,
      "Email: " + email,
      "Phone: " + phone,
      "Party size: " + partySize,
      "Preferred date: " + date,
      "Preferred time: " + time,
      "Special requests: " + (notes || "None")
    ];
    var body = bodyLines.join("\n");

    var mailto = "mailto:reservations@recipesecrets.example" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    window.location.href = mailto;
  });
});
