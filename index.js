//import ytdl from 'ytdl-core'; 
const ytdl = require('ytdl-core');
const fs = require('fs');
const readline = require('readline');

const config = require('./config/config.json');
const logger = require('./logger');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function hello() {
    console.clear();
    process.title = 'YTDL V2 - By: Androidy';
    fs.existsSync(config.folder) || fs.mkdirSync(config.folder);
    fs.existsSync(config.folder + '/video') || fs.mkdirSync(config.folder + '/video');
    fs.existsSync(config.folder + '/audio') || fs.mkdirSync(config.folder + '/audio');
    console.log('\033[34m =============================');
    console.log('\033[32m YTDL By Androidy#0001');
    console.log('\033[32m Version: ', config.version);
    console.log('\033[31m =============================');
    console.log('\033[0m')
}

async function main() { 
    await hello();
    rl.question('Enter URL: ', async (url) => {
        if (!ytdl.validateURL(url)) {
            logger.error('Invalid URL!');
            return main();
        }
        const info = await ytdl.getInfo(url);
        const title = info.videoDetails.title;
        const format = ytdl.chooseFormat(info.formats, { quality: 'highestaudio' });

        logger.info('Downloading: ' + title);
        const audio = ytdl(url, {quality: 'highestaudio'});
        const video = ytdl(url, {quality: 'highestvideo'});
        audio.pipe(fs.createWriteStream(`${config.folder}/audio/${title}.mp3`));
        video.pipe(fs.createWriteStream(`${config.folder}/video/${title}.mp4`));
        video.on('end', () => {
            logger.info(`Downloaded ${title}`);
            setTimeout(() => {
                main();
            }, 5000);
        });
    });
}


hello();
main();