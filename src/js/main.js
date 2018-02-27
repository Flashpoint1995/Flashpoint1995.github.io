$(document).ready(function () {
    $.ajax({
        type: "POST",
        url: "counter.php",
        data: "0",
        success: function (response) {
            console.log(response, 1);
        }
    });
});