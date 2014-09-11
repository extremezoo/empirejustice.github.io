
$(document).foundation({
    accordion: {
    // specify the class used for active (or open) accordion panels
    active_class: 'active-accordion'
    // allow multiple accordion panels to be active at the same time
    // multi_expand: false,
    // allow accordion panels to be closed by clicking on their headers
    // setting to false only closes accordion panels when another is opened
    // toggleable: true
    }
});

$(document).ready(function(){

    $(".accordion").on("click", "dd", function (event, accordion) {
        //$("dd.active").find(".content").slideToggle("slow");
        $(this).find(".content").slideToggle("300");
    });

});

