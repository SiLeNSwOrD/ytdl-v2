const exe = require('@angablue/exe');

const build = exe({
    entry: './index.js',
    out: './build/ytdl-v2.exe',
});

build.then(() => {
    console.log('Done!');
});