//business logic
function Contact(first, last, address, phone) {
  this.firstName = first;
  this.lastName = last;
  this.address = address;
  this.phoneNumber = phone;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedAddress = $("input#address").val();
    var inputtedPhone = $("input#phone").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedAddress, inputtedPhone);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.fullName());
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
    $(".address").text(newContact.address);
    $(".phone").text(newContact.phoneNumber);
  });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#address").val("");
    $("input#phone").val("");
  });
});
