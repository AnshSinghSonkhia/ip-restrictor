const allowOnlyStandalone = require("../src/allowOnlyStandalone");

test("should allow IP in the allowed list", () => {
    expect(allowOnlyStandalone(["192.168.1.100", "10.0.0.5"], "192.168.1.100")).toBe(true);
});

test("should deny IP not in the allowed list", () => {
    expect(allowOnlyStandalone(["192.168.1.100", "10.0.0.5"], "192.168.1.101")).toBe(false);
});
