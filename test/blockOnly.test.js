const request = require("supertest");
const express = require("express");
const blockOnly = require("../src/blockOnly");

const app = express();
app.use(blockOnly(["192.168.1.200"]));
app.get("/", (req, res) => res.send("Allowed"));

test("should block request from blacklisted IP", async () => {
    const res = await request(app).get("/").set("X-Forwarded-For", "192.168.1.200");
    expect(res.status).toBe(403);
});

test("should allow request from non-blacklisted IP", async () => {
    const res = await request(app).get("/").set("X-Forwarded-For", "192.168.1.201");
    expect(res.status).toBe(200);
    expect(res.text).toBe("Allowed");
});
