const exe = require('@angablue/exe');
const date = new Date();

const day = date.toDateString();
const time = date.toLocaleTimeString();

const build = exe({
    entry: './index.js',
    out: './build/ytdl-v2.exe',
});


build.then(() => {
    console.log('Done! was built on '  + day + ' at ' + time);
});