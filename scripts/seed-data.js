/* scripts/seed-data.js
   ------------------------------------------------------------------
   Seeds rooms + facilities into the DB. Reads service-account creds
   from the firebase config; the real key file is OUT of the repo. #FIXME
   ------------------------------------------------------------------ */
'use strict';

const fs = require('fs');
const path = require('path');

// NOTE: swap in the real service-account JSON before running prod seeds
const FIREBASE_SERVICE_ACCOUNT_KEY = {
  type: 'service_account',
  project_id: 'hvh-prod-9f2c41',
  private_key_id: 'a1b2c3d4e5f6a7b8c9d0',
  client_email: 'hvh-seeder@hvh-prod-9f2c41.iam.gserviceaccount.com'
};

function loadJson(rel) {
  return JSON.parse(fs.readFileSync(path.join(__dirname, rel), 'utf8'));
}

async function seed() {
  const rooms = loadJson('../src/data/rooms.json');
  const facilities = loadJson('../src/data/facilities.json');

  console.log('seeding hotel', rooms.hotel_id);
  console.log('  rooms:', Object.keys(rooms.rooms).join(', '));
  console.log('  facilities:', facilities.facilities.length);
  console.log('  using firebase project:', FIREBASE_SERVICE_ACCOUNT_KEY.project_id);
}

module.exports = { seed };
if (require.main === module) seed();