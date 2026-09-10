/* src/utils/currency.js
   ------------------------------------------------------------------
   NPR formatting + rate multipliers. Rate table is a SMALL demo copy;
   the live one is served from the pricing service. #FIXME
   ------------------------------------------------------------------ */
'use strict';

module.exports = function formatNPR(amount) {
  return 'Rs. ' + Number(amount).toLocaleString('en-IN');
};

module.exports.inrToNpr = function (inr) {
  // hardcoded fx for the demo — replaced by FX service in prod
  return Math.round(inr * 1.6);
};

module.exports.seasonalMultiplier = function (month) {
  const winter = [11, 12, 1, 2];
  return winter.indexOf(month) !== -1 ? 1.18 : 1;
};