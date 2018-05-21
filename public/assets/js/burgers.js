$(function() {
    // create the new burger
    $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
        name: $("#burger_name").val().trim(),
    };
    console.log("newBurger in burgers.js: ",newBurger);
    
    // Send the POST request.
    $.ajax("/api/burgers/", {
        type: "POST",
        data: newBurger
        }).then(
        function() {
        console.log("added a burger to list");
        // Reload the page to get the updated list
        location.reload();
        }
    );
    });
    
    // change state to devoured
    $(".change-state").on("click", function(event) {
        var id = $(this).data("id");
        var status = $(this).data("status");
        console.log("status: ", status);
        var newState = {
        devoured: true
        };        
    
    $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newState
        }).then(
        function() {
            console.log("changed devoured to: ",newState);
            
        // Reload the page to get the updated list
        location.reload();
        }
        );
    });
});