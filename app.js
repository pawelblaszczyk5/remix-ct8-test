const path = require("path");
const os = require("os");

const { createApp } = require("@remix-run/serve");

let port = process.env.PORT || 3000;
let buildPathArg = "build";
let buildPath = path.resolve(process.cwd(), buildPathArg);

createApp(buildPath).listen(port, () => {
  let address = Object.values(os.networkInterfaces())
    .flat()
    .find((ip) => ip?.family == "IPv4" && !ip.internal)?.address;

  if (!address) {
    throw new Error("Could not find an IPv4 address.");
  }

  console.log(`Remix App Server started at http://${address}:${port}`);
});
