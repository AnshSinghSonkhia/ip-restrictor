const allowOnlyStandalone = (allowedIPs, ip) => {
    return allowedIPs.includes(ip);
};

module.exports = allowOnlyStandalone;
