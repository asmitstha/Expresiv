$(document).on("click", "#nav-btn", function () {
    $("body").toggleClass("nav-open");
    $(".nav-container").toggleClass("pointer");
    setTimeout(function () {
        if ($(".nav-container").hasClass("pointer")) {
            $("#nav-overlay").addClass("show");
            $(".nav-list").delay(500).queue(function () {
                setTimeout(function () {
                    $(".nav-list").addClass("show");
                }, 400);

            }).dequeue();
        } else {
            $(".nav-list").removeClass("show");
            $("#nav-overlay").delay(250).queue(function () {
                setTimeout(function () {
                    $("#nav-overlay").removeClass("show");
                }, 400);

            }).dequeue();
        }
    }, 250);
});
