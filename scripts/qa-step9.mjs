import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const PORT = 3005;
const BASE_URL = `http://localhost:${PORT}`;
const SCREENSHOT_DIR = path.resolve('docs/screenshots/step9');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

function checkUrl(pathname) {
  return new Promise((resolve) => {
    http.get(`${BASE_URL}${pathname}`, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        resolve({ status: res.statusCode, length: data.length });
      });
    }).on('error', (err) => {
      resolve({ status: 'ERROR', error: err.message });
    });
  });
}

function takeScreenshot(url, filename, width, height) {
  return new Promise((resolve, reject) => {
    const fullPath = path.join(SCREENSHOT_DIR, filename);
    const args = [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      `--window-size=${width},${height}`,
      `--screenshot=${fullPath}`,
      url,
    ];

    const proc = spawn(CHROME_PATH, args);
    proc.on('close', (code) => {
      if (code === 0) {
        console.log(`[Screenshot Captured] ${filename} (${width}x${height})`);
        resolve(fullPath);
      } else {
        console.warn(`[Screenshot Warning] Exit code ${code} for ${filename}`);
        resolve(null);
      }
    });
    proc.on('error', (err) => {
      console.warn(`[Screenshot Error] ${err.message}`);
      resolve(null);
    });
  });
}

async function run() {
  console.log(`Starting Next.js production server on port ${PORT}...`);
  const server = spawn('npx.cmd', ['next', 'start', '-p', String(PORT)], {
    stdio: 'inherit',
    shell: true,
  });

  // Wait 4 seconds for server ready
  await new Promise((r) => setTimeout(r, 4000));

  console.log('\n--- 1. HTTP STATUS VERIFICATION ---');
  const routesToTest = [
    '/about',
    '/services',
    '/contact',
    '/categories',
    '/categories/corrugation-production-lines',
    '/categories/single-facer-corrugators',
    '/categories/hydraulic-electric-mill-roll-stands',
    '/categories/cut-off-stacking-systems',
    '/categories/printing-slotting-converting',
    '/categories/thin-blades-knives',
    '/categories/anvil-covers',
    '/categories/feeder-wheels',
    '/categories/no-crush-wheels',
    '/categories/grinding-wheels',
    '/categories/belts-transmission',
    '/categories/bearings',
    '/categories/electricals-automation',
    '/categories/stitching-machine-spares',
    '/categories/pneumatics-mechanical',
    '/request-quote',
    '/request-quote?product=wj-100-1800-2ply-plant',
    '/request-quote?product=sf-280-single-facer',
    '/request-quote?part=thin-blade-100-20-1-2&sku=TB-100-20-12',
    '/request-quote?part=maxdura-anvil-cover-peach&sku=AC-MD-KN-PCH',
    '/request-quote?unknown=invalid-query',
    '/products',
    '/spare-parts',
    '/cart',
    '/',
  ];

  const results = [];
  for (const route of routesToTest) {
    const res = await checkUrl(route);
    console.log(`GET ${route.padEnd(65)} => ${res.status} (${res.length || 0} bytes)`);
    results.push({ route, status: res.status });
  }

  console.log('\n--- 2. CAPTURING VISUAL VERIFICATION SCREENSHOTS ---');
  await takeScreenshot(`${BASE_URL}/about`, '01_about_desktop.png', 1440, 900);
  await takeScreenshot(`${BASE_URL}/about`, '02_about_mobile.png', 390, 844);

  await takeScreenshot(`${BASE_URL}/services`, '03_services_desktop.png', 1440, 900);
  await takeScreenshot(`${BASE_URL}/services`, '04_services_mobile.png', 390, 844);

  await takeScreenshot(`${BASE_URL}/contact`, '05_contact_desktop.png', 1440, 900);
  await takeScreenshot(`${BASE_URL}/contact`, '06_contact_mobile.png', 390, 844);

  await takeScreenshot(`${BASE_URL}/categories`, '07_categories_directory_desktop.png', 1440, 900);
  await takeScreenshot(`${BASE_URL}/categories`, '08_categories_directory_mobile.png', 390, 844);

  await takeScreenshot(
    `${BASE_URL}/categories/corrugation-production-lines`,
    '09_category_machinery_detail_desktop.png',
    1440,
    900
  );
  await takeScreenshot(
    `${BASE_URL}/categories/thin-blades-knives`,
    '10_category_spares_detail_desktop.png',
    1440,
    900
  );

  await takeScreenshot(`${BASE_URL}/request-quote`, '11_request_quote_general_desktop.png', 1440, 900);
  await takeScreenshot(
    `${BASE_URL}/request-quote?product=wj-100-1800-2ply-plant`,
    '12_request_quote_machinery_prefilled.png',
    1440,
    900
  );
  await takeScreenshot(
    `${BASE_URL}/request-quote?part=thin-blade-100-20-1-2&sku=TB-100-20-12`,
    '13_request_quote_spare_part_prefilled.png',
    1440,
    900
  );

  console.log('\n--- 3. TERMINATING TEST SERVER ---');
  server.kill('SIGTERM');
  setTimeout(() => {
    process.exit(0);
  }, 1000);
}

run().catch((err) => {
  console.error('QA script failed:', err);
  process.exit(1);
});

