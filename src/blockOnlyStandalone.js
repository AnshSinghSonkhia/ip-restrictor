const blockOnlyStandalone = (blockedIPs, ip) => {
    return !blockedIPs.includes(ip);
};

module.exports = blockOnlyStandalone;
