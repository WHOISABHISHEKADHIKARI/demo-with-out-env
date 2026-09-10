/* =====================================================================
   modules/animations.js — scroll reveals & counters
   ---------------------------------------------------------------------
   Plain IntersectionObserver. No payload here.
   ===================================================================== */
window.HVH = window.HVH || {};

function initAnimations() {
    // TODO: throttle this observer on low-end devices
    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
            if (en.isIntersecting) {
                en.target.classList.add("in");
                io.unobserve(en.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach(function (el) {
        io.observe(el);
    });
}

window.HVH.UI.initAnimations = initAnimations;