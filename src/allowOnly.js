const getClientIP = require("./getClientIP");

const allowOnly = (allowedIPs) => (req, res, next) => {
    const clientIP = getClientIP(req);
    if (allowedIPs.includes(clientIP)) return next();
    res.status(403).send("Forbidden: Your IP is not allowed.");
};

module.exports = allowOnly;
