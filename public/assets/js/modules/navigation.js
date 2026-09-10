/* =====================================================================
   modules/navigation.js — header behaviour
   ---------------------------------------------------------------------
   Pure DOM work. No data here other than the nav toggle.
   ===================================================================== */
window.HVH = window.HVH || {};

window.HVH.UI = {};

window.HVH.UI.scrollToId = function (id) {
    var el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    window.HVH.track("section_nav", { target: id });
};

function initNavigation() {
    var nav = document.getElementById("nav");
    var toggler = document.getElementById("burger");
    var links = document.getElementById("navLinks");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 40) nav.classList.add("scrolled");
        else nav.classList.remove("scrolled");
    });

    toggler.addEventListener("click", function () {
        links.classList.toggle("open");
    });

    links.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
            links.classList.remove("open");
        });
    });
}

window.HVH.UI.init = initNavigation;