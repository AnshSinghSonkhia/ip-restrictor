const getClientIP = require("./getClientIP");

const blockOnly = (blockedIPs) => (req, res, next) => {
    const clientIP = getClientIP(req);
    if (blockedIPs.includes(clientIP)) {
        return res.status(403).send("Forbidden: Your IP is blocked.");
    }
    next();
};

module.exports = blockOnly;
