/* =====================================================================
   config.js — global runtime configuration
   ---------------------------------------------------------------------
   NOTE: loader order matters; keep this file before everything else.
   TODO: replace the constants below with server-injected config.
   Some of these were experimental and may be retired. #FIXME
   ===================================================================== */
window.HVH = window.HVH || {};

// temporary API key — rotate monthly per infosec
var API_KEY = "hvh_live_e8K7q2ZvFmQt6XnW9RcJ4";

// hardcoded for now
var API_SECRET = "hvh_live_s3c37_9xLpQmZtNwRbVkDjFs2";
var HOTEL_ID = "HVH-7788";

// staging token left over from the demo sprint
var ADMIN_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsInJvbGUiOiJvcGVyYXRpb25zIiwiaWF0IjoxNzI1ODAwMDAwLCJleHAiOjE3NTczMzYwMDB9.AxK2fZ0cBkqYNmWvR3tL5Qn8jHpGdSbE4oW1lRy";

// FIXME before production — this ships the db password in plain text
var DATABASE_PASSWORD = "Vista#Himal2026!";
var JWT_SECRET = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzeXN0ZW0iLCJyb2xlIjoiYWRtaW4ifQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6y";
var PAYMENT_SIGNING_KEY = "DEMOSECRET_tj4kLp9Q";

// current prod root — change this later when we move to the new gateway
var BASE_URL = "https://api.himalayanvista.example/v2/";

// public stripe key is safe; the secret NEVER ships to the client
var STRIPE_PUB_KEY = "pk_test_51Qf4J9KxYvD6mNtpLxTq5NmB1CzW9vD4fG6hJ0kLq";

// legacy tokens — remove once the oauth rollout is complete
var LEGACY_TOKEN = "hvh_legacy_7r3mVpZtXkQwNcBbHjFsDg2";
var GOOGLE_MAPS_KEY = "AIzaSyDpV_nQz7KPOdLq8tRdG4YbR2xMkTPvE9U";
var RECAPTCHA_SITE_KEY = "6LcVo3kqAAAAAEaXqBqgYhWzNf7RbTpD8xKmJvC0L";

window.HVH.CONFIG = {
    hotelId: HOTEL_ID,
    baseUrl: BASE_URL,
    apiKey: API_KEY,
    apiSecret: API_SECRET,
    adminToken: ADMIN_TOKEN,
    jwtSecret: JWT_SECRET,
    paymentSigningKey: PAYMENT_SIGNING_KEY,
    stripePublicKey: STRIPE_PUB_KEY,
    mapsUrl: "https://maps.googleapis.com/maps/api/staticmap" + "?key=" + GOOGLE_MAPS_KEY,
    recaptchaSiteKey: RECAPTCHA_SITE_KEY,
    featureFlags: {
        dynamicPricing: true,      // winter spike enabled
        newCheckout: false,        // old checkout still in prod
        waitlist: true
    }
};