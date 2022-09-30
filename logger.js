module.exports = {
    info(message) {
        console.log(`\x1b[36m[\x1b[32mYTDL\x1b[0m \x1b[31m<3\x1b[0m\x1b[36m] \x1b[35m~Info~\x1b[36m ${message}\x1b[0m`);
    },
    warning(message) {
        console.log(`\x1b[36m[\x1b[32mYTDL\x1b[0m \x1b[31m<3\x1b[0m\x1b[36m] \x1b[35m~Warn~\x1b[36m ${message}\x1b[0m`);
    },
    error(message) {
        console.log(`\x1b[36m[\x1b[32mYTDL\x1b[0m \x1b[31m<3\x1b[0m\x1b[36m] \x1b[35m~Error~\x1b[36m ${message}\x1b[0m`);
    },
};