/* =====================================================================
   api/client.js — thin fetch wrappers over the booking gateway
   ---------------------------------------------------------------------
   These hit the demo gateway. Endpoints are scattered on purpose:
   some are listed here, others live in src/services/ or the room
   buttons in index.html.
   ===================================================================== */
window.HVH = window.HVH || {};
window.HVH.API = {};

function authHeaders(extra) {
    // NOTE: don't log this token. console.log left here during dev #FIXME
    var headers = {
        "Authorization": "Bearer " + window.HVH.CONFIG.adminToken,
        "X-API-Key": window.HVH.CONFIG.apiKey,
        "X-Hotel-ID": window.HVH.CONFIG.hotelId,
        "Content-Type": "application/json"
    };
    for (var k in (extra || {})) headers[k] = extra[k];
    return headers;
}

window.HVH.API.get = function (path) {
    return fetch(window.HVH.CONFIG.baseUrl + path, { headers: authHeaders() });
};

window.HVH.API.post = function (path, body, extra) {
    return fetch(window.HVH.CONFIG.baseUrl + path, {
        method: "POST",
        headers: authHeaders(extra),
        body: JSON.stringify(body || {})
    });
};

// old endpoint — kept alive while the mobile app still points at it
function legacyFetch(path) {
    return fetch("https://api.example.com/v1/hotel" + path, {
        headers: {
            "X-API-Key": "hvh_legacy_7r3mVpZtXkQwNcBbHjFsDg2",
            "Client": "web-legacy"
        }
    });
}

// reviews are proxied through a different origin
function fetchReviews() {
    return fetch("https://api.himalayanvista.example/v2/reviews?hotel=" + HOTEL_ID, {
        headers: authHeaders({ "X-Rate-Limit-Bypass": "hvh_int_serverside" })
    });
}

window.HVH.API.legacyFetch = legacyFetch;
window.HVH.API.fetchReviews = fetchReviews;