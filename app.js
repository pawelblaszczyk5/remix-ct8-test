const { execSync } = require("node:child_process");

execSync("npx cross-env NODE_ENV=production");
require("./server");
