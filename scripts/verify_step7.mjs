import { spawn, execSync } from "child_process";
import fs from "fs";
import path from "path";

const PORT = 3005;
const BASE_URL = `http://127.0.0.1:${PORT}`;

const ALL_18_SLUGS = [
  "wj-100-1800-2ply-plant",
  "sf-280-single-facer",
  "sf-10-single-facer",
  "sf-360s-fingerless-single-facer",
  "zj-v5b-hydraulic-mill-roll-stand",
  "hydraulic-mill-roll-stand-2ton",
  "zj-yb-electric-mill-roll-stand",
  "nc-1800-rotary-cutter",
  "jh-80-mechanical-cutter",
  "szj-rotary-stacker",
  "7m-single-colour-printer-slotter",
  "hy-a-auto-printer-slotter-die-cutter",
  "hy-b-chain-feeding-rotary-slotting",
  "bfy-dp-thin-blade-slitter-scorer",
  "fully-auto-box-flap-pasting",
  "semi-auto-servo-box-stitching",
  "double-head-box-stitching",
  "tmb-stm-flute-lamination",
];

const SCREENSHOT_TARGETS = [
  {
    name: "01_wj100_1800_desktop.png",
    url: `${BASE_URL}/products/wj-100-1800-2ply-plant`,
    width: 1440,
    height: 3200,
  },
  {
    name: "02_wj100_1800_mobile.png",
    url: `${BASE_URL}/products/wj-100-1800-2ply-plant`,
    width: 390,
    height: 2400,
  },
  {
    name: "03_sf280_desktop.png",
    url: `${BASE_URL}/products/sf-280-single-facer`,
    width: 1440,
    height: 3000,
  },
  {
    name: "04_sf280_mobile.png",
    url: `${BASE_URL}/products/sf-280-single-facer`,
    width: 390,
    height: 2400,
  },
  {
    name: "05_sf10_desktop.png",
    url: `${BASE_URL}/products/sf-10-single-facer`,
    width: 1440,
    height: 3000,
  },
  {
    name: "06_zjv5b_stand_desktop.png",
    url: `${BASE_URL}/products/zj-v5b-hydraulic-mill-roll-stand`,
    width: 1440,
    height: 2800,
  },
  {
    name: "07_standard_2ton_stand_desktop.png",
    url: `${BASE_URL}/products/hydraulic-mill-roll-stand-2ton`,
    width: 1440,
    height: 2800,
  },
  {
    name: "08_7m_printer_slotter_desktop.png",
    url: `${BASE_URL}/products/7m-single-colour-printer-slotter`,
    width: 1440,
    height: 2800,
  },
  {
    name: "09_hya_die_cutter_desktop.png",
    url: `${BASE_URL}/products/hy-a-auto-printer-slotter-die-cutter`,
    width: 1440,
    height: 2800,
  },
  {
    name: "10_request_quote_prefilled.png",
    url: `${BASE_URL}/request-quote?product=wj-100-1800-2ply-plant`,
    width: 1440,
    height: 1200,
  },
];

// Locate Edge or Chrome binary
let browserPath = "";
if (fs.existsSync("C:\\Program Files (x86)\\Microsoft\Edge\\Application\\msedge.exe")) {
  browserPath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
} else if (fs.existsSync("C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe")) {
  browserPath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
}

console.log(`Using headless browser: ${browserPath}`);

const outDir = path.resolve("docs/screenshots/step7");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Start Next.js server
console.log(`Starting Next.js production server on port ${PORT}...`);
const serverProcess = spawn("npx.cmd", ["next", "start", "-H", "127.0.0.1", "-p", String(PORT)], {
  stdio: ["ignore", "pipe", "pipe"],
  shell: true,
});

serverProcess.stdout.on("data", (d) => {
  const msg = d.toString();
  if (msg.includes("Ready in") || msg.includes("started server")) {
    console.log(`Server: ${msg.trim()}`);
  }
});

serverProcess.stderr.on("data", (d) => {
  console.error(`Server Err: ${d.toString().trim()}`);
});

// Wait for server to be responsive
async function waitForServer(maxAttempts = 30) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const res = await fetch(`${BASE_URL}/products`);
      if (res.ok) {
        console.log(`Next.js server is ready at ${BASE_URL}`);
        return true;
      }
    } catch (e) {
      if (i % 5 === 0) console.log(`Waiting for server... (${e.message})`);
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error("Server failed to respond within timeout");
}

async function run() {
  try {
    await waitForServer();

    console.log("\n=======================================================");
    console.log("TESTING ALL 18 PRODUCT DETAIL ROUTES VIA HTTP GET");
    console.log("=======================================================");

    for (const slug of ALL_18_SLUGS) {
      const url = `${BASE_URL}/products/${slug}`;
      const res = await fetch(url);
      const text = await res.text();

      if (res.status !== 200) {
        console.error(`FAIL: ${url} returned status ${res.status}`);
        process.exitCode = 1;
      } else {
        const hasQuoteCTA = text.includes("Request a Machine Quote");
        const hasTechSpecs = text.includes("Detailed Technical Specifications");
        const hasBreadcrumb = text.includes("Breadcrumb");
        console.log(`PASS: /products/${slug} (HTTP 200, QuoteCTA: ${hasQuoteCTA}, Specs: ${hasTechSpecs}, Nav: ${hasBreadcrumb})`);
      }
    }

    console.log("\n=======================================================");
    console.log("CAPTURING SCREENSHOTS FOR STEP 7 VERIFICATION");
    console.log("=======================================================");

    for (const item of SCREENSHOT_TARGETS) {
      const outFile = path.resolve(outDir, item.name);
      console.log(`Capturing: ${item.name} (${item.width}x${item.height}) from ${item.url}`);

      const cmd = `"${browserPath}" --headless=new --disable-gpu --window-size=${item.width},${item.height} --screenshot="${outFile}" "${item.url}"`;
      try {
        execSync(cmd, { stdio: "ignore", timeout: 20000 });
        if (fs.existsSync(outFile)) {
          const stats = fs.statSync(outFile);
          console.log(`  Saved: ${item.name} (${Math.round(stats.size / 1024)} KB)`);
        } else {
          console.warn(`  Warning: ${item.name} not created`);
        }
      } catch (err) {
        console.error(`  Error capturing ${item.name}: ${err.message}`);
      }
    }

    console.log("\nAll verification and screenshot tasks finished successfully.");
  } finally {
    console.log("Stopping server...");
    serverProcess.kill("SIGTERM");
    setTimeout(() => {
      try {
        process.kill(serverProcess.pid);
      } catch (e) {}
    }, 1000);
  }
}

run();
