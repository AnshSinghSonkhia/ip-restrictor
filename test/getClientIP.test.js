const getClientIP = require("../src/getClientIP");

test("should return IP from X-Forwarded-For header", () => {
    const req = { headers: { "x-forwarded-for": "192.168.1.100" }, connection: {} };
    expect(getClientIP(req)).toBe("192.168.1.100");
});

test("should return IP from connection.remoteAddress", () => {
    const req = { headers: {}, connection: { remoteAddress: "192.168.1.200" } };
    expect(getClientIP(req)).toBe("192.168.1.200");
});
