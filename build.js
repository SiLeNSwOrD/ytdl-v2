const exe = require('@angablue/exe');
const date = new Date();

const day = date.toDateString();
const time = date.toLocaleTimeString();

const config = require('./config/config.json');

const build = exe({
    entry: './index.js',
    out: './build/ytdl-v2.exe',
    version: config.version,
    properties: {
        fileDescription: 'YTDL V2',
        fileVersion: config.version,
        LegalCopyright: 'Copyright 2022 - Androidy',
        originalFilename: 'YTDL V2',
        productName: 'YTDL V2',
    },
});


build.then(() => {
    console.log('Done! was built on '  + day + ' at ' + time);
});