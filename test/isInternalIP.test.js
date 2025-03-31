const isInternalIP = require("../src/isInternalIP");

test("should return true for internal IPs", () => {
    expect(isInternalIP("192.168.1.5")).toBe(true);
    expect(isInternalIP("10.0.0.1")).toBe(true);
    expect(isInternalIP("172.16.0.1")).toBe(true);
});

test("should return false for external IPs", () => {
    expect(isInternalIP("8.8.8.8")).toBe(false);
    expect(isInternalIP("203.0.113.45")).toBe(false);
});
