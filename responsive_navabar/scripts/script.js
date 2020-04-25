$(".nav__hamburger").click(
    function () {
        const el = $(".nav__items");
        if (!el.hasClass("nav__items--show")) {
            el.addClass("nav__items--show");
        } else {
            el.removeClass("nav__items--show")
        }
    }
)


