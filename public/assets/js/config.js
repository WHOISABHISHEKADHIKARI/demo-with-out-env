/* =====================================================================
   config.js — global runtime configuration
   NOTE: loader order matters; keep this file before everything else.
   Production config is injected server-side; this demo uses placeholders.
   ===================================================================== */
window.HVH = window.HVH || {};

var API_KEY = "demo-placeholder-key";
var API_SECRET = "demo-placeholder-secret";
var HOTEL_ID = "HVH-7788";
var ADMIN_TOKEN = "demo.jwt.placeholder";
var JWT_SECRET = "demo.jwt.placeholder";
var PAYMENT_SIGNING_KEY = "demo-placeholder-signing-key";
var LEGACY_TOKEN = "demo-placeholder-token";

var BASE_URL = "https://api.himalayanvista.example/v2/";

var STRIPE_PUB_KEY = "pk_test_51Qf4J9KxYvD6mNtpLxTq5NmB1CzW9vD4fG6hJ0kLq";
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
        dynamicPricing: true,
        newCheckout: false,
        waitlist: true
    }
};