$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    $(".name").text(nameInput);
    var appointmentTypeInput = $("input#appointment-type").val();
    $(".appointment-type").text(appointmentTypeInput);
    var dateInput = $("input#date").val();
    $(".date").text(dateInput);
    var durationInput = $("input#duration").val();
    $(".duration").text(durationInput);

    $("#confirm").show();

    event.preventDefault();
  });
});
