const request = require("supertest");
const express = require("express");
const allowOnly = require("../src/allowOnly");

const app = express();
app.use(allowOnly(["192.168.1.100"]));
app.get("/", (req, res) => res.send("Allowed"));

test("should allow request from whitelisted IP", async () => {
    const res = await request(app).get("/").set("X-Forwarded-For", "192.168.1.100");
    expect(res.status).toBe(200);
    expect(res.text).toBe("Allowed");
});

test("should block request from non-whitelisted IP", async () => {
    const res = await request(app).get("/").set("X-Forwarded-For", "192.168.1.101");
    expect(res.status).toBe(403);
});
