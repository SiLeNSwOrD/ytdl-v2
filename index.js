//import ytdl from 'ytdl-core'; 
const ytdl = require('ytdl-core');
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function hello() {
    console.clear();
    fs.existsSync("Downloads") || fs.mkdirSync("Downloads");
    console.log('\033[34m =============================');
    console.log('\033[32m Simple YTDL By Androidy#0001');
    console.log('\033[32m Version: 2.0');
    console.log('\033[31m =============================');
    console.log('\033[0m')
}

async function main() { 
    await hello();
    rl.question('Enter URL: ', async (url) => {
        if (!ytdl.validateURL(url)) {
            console.log('Invalid URL');
            return main();
        }
        const info = await ytdl.getInfo(url);
        const title = info.videoDetails.title;
        const format = ytdl.chooseFormat(info.formats, { quality: 'highestaudio' });
        console.log(`Downloading ${title}...`);
        const audio = ytdl(url, { format: format });
        audio.pipe(fs.createWriteStream(`Downloads/${title}.mp3`));
        audio.on('end', () => {
            console.log(`Downloaded ${title}`);
            setTimeout(() => {
                main();
            }, 1000);
        });
    });
}


hello();
main();