const isInternalIP = (ip) => {
    return /^((10\.)|(192\.168\.)|(172\.(1[6-9]|2[0-9]|3[0-1])))/.test(ip);
};

module.exports = isInternalIP;
