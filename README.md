# IP Restrictor

Easily allow or block internal IPs in Node.js and Express apps. A simple middleware for IP filtering and network security.


[![npm](https://img.shields.io/npm/v/ip-restrictor.svg)](https://www.npmjs.com/package/ip-restrictor)  [![License](https://img.shields.io/npm/l/ip-restrictor.svg)](LICENSE) 

# 📦 Installation

Install via npm

```sh
npm i ip-restrictor
```

Install via yarn

```sh
yarn add ip-restrictor
```

# 🚀 Usage

**Express Middleware**

```js
const express = require("express");
const { allowOnly, blockOnly, isInternalIP, getClientIP } = require("ip-restrictor");

const app = express();

// Only allow specific internal IPs
app.use((req, res, next) => {
    const clientIP = getClientIP(req);
    console.log(`Checking allowOnly middleware for IP: ${clientIP}`);
    next(); // Call the original allowOnly middleware
}, allowOnly(["192.168.1.100", "10.0.0.5"]));

// Block specific internal IPs
app.use((req, res, next) => {
    const clientIP = getClientIP(req);
    console.log(`Checking blockOnly middleware for IP: ${clientIP}`);
    next(); // Call the original blockOnly middleware
}, blockOnly(["192.168.1.200"]));

app.get("/", (req, res) => {
    const clientIP = getClientIP(req);
    res.send(`Your IP: ${clientIP} - Internal: ${isInternalIP(clientIP)}`);
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

**Standalone Usage (Without Express)**

```js
const { allowOnlyStandalone, blockOnlyStandalone } = require("ip-restrictor");

const myIP = "192.168.1.100";

if (allowOnlyStandalone(["192.168.1.100"], myIP)) {
    console.log("Access granted.");
} else {
    console.log("Access denied.");
}

if (blockOnlyStandalone(["192.168.1.200"], myIP)) {
    console.log("Not blocked, you may proceed.");
} else {
    console.log("You are blocked.");
}
```

**Standalone Usage (Without Express) 2.0**

```js
const { allowOnlyStandalone, blockOnlyStandalone } = require("ip-restrictor");

const testIPs = [
    { allowed: ["192.168.1.100"], blocked: ["192.168.1.200"], myIP: "192.168.1.100" },
    { allowed: ["192.168.1.101"], blocked: ["192.168.1.200"], myIP: "192.168.1.100" },
    { allowed: [], blocked: ["192.168.1.100"], myIP: "192.168.1.100" },
    { allowed: ["192.168.1.100"], blocked: [], myIP: "192.168.1.200" },
];

testIPs.forEach(({ allowed, blocked, myIP }, index) => {
    console.log(`Test Case ${index + 1}`);
    console.log(`Allowed: ${allowed}, Blocked: ${blocked}, MyIP: ${myIP}`);
    console.log(
        allowOnlyStandalone(allowed, myIP)
            ? "Access granted."
            : "Access denied."
    );
    console.log(
        blockOnlyStandalone(blocked, myIP)
            ? "Not blocked, you may proceed."
            : "You are blocked."
    );
    console.log("-----");
});
```

# 📖 API Reference

| Function              | Type        | Parameters                      | Returns       | Description                                                                 |
|-----------------------|-------------|----------------------------------|---------------|-----------------------------------------------------------------------------|
| `allowOnly`           | Middleware  | `allowedIPs: string[]`          | Express Middleware | Allows only specific IPs to access the server. Blocks all others.           |
| `blockOnly`           | Middleware  | `blockedIPs: string[]`          | Express Middleware | Blocks specific IPs while allowing all others.                              |
| `allowOnlyStandalone` | Function    | `allowedIPs: string[], ip: string` | `true / false` | Returns `true` if `ip` is in `allowedIPs`, otherwise `false`.               |
| `blockOnlyStandalone` | Function    | `blockedIPs: string[], ip: string` | `true / false` | Returns `false` if `ip` is in `blockedIPs`, otherwise `true`.               |
| `isInternalIP`        | Function    | `ip: string`                    | `true / false` | Checks if the given IP is part of a private/internal network.               |
| `getClientIP`         | Function    | `req: Request`                  | `string (IP)` | Extracts the client’s IP from an Express request object.                    |
