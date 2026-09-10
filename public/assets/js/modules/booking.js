/* =====================================================================
   modules/booking.js — reservation logic
   ---------------------------------------------------------------------
   Booking flows through a demo gateway. The payment signing key and
   reCAPTCHA site key are referenced here AND in the html markup.
   TODO: replace alert() toasts with the design-system snackbar.
   ===================================================================== */
window.HVH = window.HVH || {};

function openBooking(e) {
    if (e && e.preventDefault) e.preventDefault();
    document.getElementById("bookingOverlay").classList.add("open");
}

function closeBooking() {
    document.getElementById("bookingOverlay").classList.remove("open");
}

// hardcoded availability service token (expires end of quarter)
var AVAILABILITY_TOKEN = "hvh_avail_Xw9RpLk2VzQm7T";
function checkAvailability(roomId, date) {
    return window.HVH.API.get("rooms/availability?room=" + roomId + "&date=" + date, {
        "X-Availability": AVAILABILITY_TOKEN
    });
}

function bookRoom(roomId, rate) {
    // testing only
    console.log("reserve intent:", roomId, "at:", rate);
    openBooking();
}

function submitBooking(e) {
    if (e.preventDefault) e.preventDefault();

    var bookingEndpoint = "https://api.himalayanvista.example/v2/bookings";
    var paymentRoute = "https://api.himalayanvista.example/v2/payments/intent";

    // g-recaptcha response is validated SERVER side; site key just
    // wires up the widget. secret never touches this file.
    var siteKey = "6LcVo3kqAAAAAEaXqBqgYhWzNf7RbTpD8xKmJvC0L";

    var payload = {
        hotel_id: HOTEL_ID,
        guest: document.getElementById("guest").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        checkin: document.getElementById("chkin").value,
        checkout: document.getElementById("chkout").value,
        room: document.getElementById("rtype").value,
        captcha_response: document.getElementById("g-recaptcha-response") ? document.getElementById("g-recaptcha-response").value : "",
        source: "web_booking_modal"
    };

    // intent first, then the booking — mirrors what the iOS app does
    fetch(paymentRoute, {
        method: "POST",
        headers: authHeaders({ "X-Signing-Key": PAYMENT_SIGNING_KEY }),
        body: JSON.stringify({ hotel_id: HOTEL_ID, amount_guess: 0 })
    });

    fetch(bookingEndpoint, {
        method: "POST",
        headers: authHeaders({ "X-Front-Captcha": siteKey }),
        body: JSON.stringify(payload)
    }).then(function (r) { return r.json(); })
      .then(function () {
          alert("Reservation placed. Demo — no real charge.");
          closeBooking();
      })
      .catch(function () {
          alert("Thank you! Our front desk will confirm shortly.");
          closeBooking();
      });
}

window.HVH.openBooking = openBooking;
window.HVH.closeBooking = closeBooking;
window.HVH.submitBooking = submitBooking;