//My devour button seems to do nothing but reload the page. No errors thrown. The burgers just dont switch divs...
$(document).ready(function() {
    $(".devourBurger").on("submit", function(event) {
        event.preventDefault();
        var burgerId = $(this).children(".burger_id").val();
        // Send the PUT request.
        $.ajax({
            method: "PUT",
            url: "/burgers/update/" + burgerId
        }).done(function(data) {
            console.log("changed to devoured");
            // Reload the page to get the updated list
            location.reload();
        });

    });

    //Trying to set up a clear table but not working
    $("#burgerClear").click(function(event) {
        event.preventDefault();

        $.ajax("burgers", {
            type: "DELETE",
        }).then(function() {
            console.log("Cleared Database");
            location.reload();
        });
    });
});



//I wanted to hide the Divs until data was put into them but this is also not working...

// $("#burgerSubmit").click(function(event) {
//     event.preventDefault();
//     var preparedBurgers = $("#preparedBurger");

//     var displaySetting = preparedBurgers.style.display;

//     if (preparedBurgers === 'block') {
//         preparedBurgers.style.display = 'none';
//     }
//     else {
//         preparedBurgers.style.display = 'block';
//     }
// });


// $(function() {
//     $("#toggle").html(hide);
//     // toggleDiv();
// });

// function hide() {
//     var myDiv = $("#toggle");
//     var display = myDiv.style.display;

//     if ($("#toggleHide").text().length === 0) {
//         myDiv.style.display = "none";
//     }
//     else {
//         myDiv.style.display = "block";
//     }
// }
