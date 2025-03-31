const blockOnlyStandalone = require("../src/blockOnlyStandalone");

test("should deny access to blocked IP", () => {
    expect(blockOnlyStandalone(["192.168.1.200", "10.0.0.6"], "192.168.1.200")).toBe(false);
});

test("should allow access to non-blocked IP", () => {
    expect(blockOnlyStandalone(["192.168.1.200", "10.0.0.6"], "192.168.1.100")).toBe(true);
});
