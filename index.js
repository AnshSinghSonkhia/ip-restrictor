const allowOnly = require("./src/allowOnly");
const blockOnly = require("./src/blockOnly");
const isInternalIP = require("./src/isInternalIP");
const getClientIP = require("./src/getClientIP");

const allowOnlyStandalone = require("./src/allowOnlyStandalone");
const blockOnlyStandalone = require("./src/blockOnlyStandalone");

module.exports = {
    allowOnly,
    blockOnly,
    allowOnlyStandalone,
    blockOnlyStandalone,
    isInternalIP,
    getClientIP
};