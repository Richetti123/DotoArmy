import fetch from "node-fetch"
import yts from "yt-search"
import ytdl from 'ytdl-core'
import axios from 'axios'
import { ytDownload } from '../lib/y2mate.js';
const LimitAud = 725 * 1024 * 1024 //700MB
const LimitVid = 425 * 1024 * 1024 //425MB

let handler = async (m, { conn, command, args, text, usedPrefix }) => {
let q, v, yt, dl_url, ttl, size, lolhuman, lolh, n, n2, n3, n4, cap, qu, currentQuality   
if (!text) throw `${lenguajeGB['smsAvisoMG']()}${mid.smsMalused4}\n*${usedPrefix + command} Khé? - Rauw Alejandro*`
try {
const yt_play = await search(args.join(" "))
let additionalText = ''

const texto1 = `⌘━─━─≪ *YOUTUBE* ≫─━─━⌘
★ ${mid.smsYT1}
★ ${yt_play[0].title}
╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴
★ ${mid.smsYT15}
★ ${yt_play[0].ago}
╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴
★ ${mid.smsYT5}
★ ${secondString(yt_play[0].duration.seconds)}
╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴
★  ${mid.smsYT10}
★ ${MilesNumber(yt_play[0].views)}
╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴
★  ${mid.smsYT2}
★ ${yt_play[0].author.name}
╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴
★ ${mid.smsYT4}
★ ${yt_play[0].url.replace(/^https?:\/\//, '')}
⌘━━─≪ ${gt} ≫─━━⌘

> _*Descargando... Aguarde un momento por favor*_`.trim()
await conn.sendFile(m.chat, yt_play[0].thumbnail, 'error.jpg', texto1, m, null, fake)

if (command == 'play') {	
try {
const dataRE = await fetch(`https://www.vanitas-api.online/download/ytmp3?url=${yt_play[0].url}`);
const dataRET = await dataRE.json();
await conn.sendMessage(m.chat, { audio: { url: dataRET.response.link }, mimetype: 'audio/mpeg',
contextInfo: {
externalAdReply: {
title: `Disfrute de su audio con ${wm}`,
body: yt_play[0].title,
thumbnailUrl: yt_play[0].thumbnail,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: m });
} catch {
try {
const dataRE = await fetch(`https://www.vanitas-api.online/download/ytmp3?url=${yt_play[0].url}`);
const dataRET = await dataRE.json();
await conn.sendMessage(m.chat, { audio: { url: dataRET.response.link }, fileName: `default.mp3`, mimetype: 'audio/mpeg' }, { quoted: m })
} catch {
try {
const dataRE = await fetch(`https://www.vanitas-api.online/download/ytmp3?url=${yt_play[0].url}`);
const dataRET = await dataRE.json();
await conn.sendMessage(m.chat, { audio: { url: dataRET.response.link }, mimetype: 'audio/mpeg',
contextInfo: {
externalAdReply: {
title: `Disfrute de su audio con ${wm}`,
body: yt_play[0].title,
thumbnailUrl: yt_play[0].thumbnail,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: m });
} catch {
try {
const dataRE = await fetch(`https://www.vanitas-api.online/download/ytmp3?url=${yt_play[0].url}`);
const dataRET = await dataRE.json();
await conn.sendMessage(m.chat, { audio: { url: dataRET.response.link }, fileName: `default.mp3`, mimetype: 'audio/mpeg' }, { quoted: m })
} catch {
}}}}
}  
if (command == 'play2') {
try {
const dataRE = await fetch(`https://www.vanitas-api.online/download/ytmp4?url=${yt_play[0].url}`);
const dataRET = await dataRE.json();
await conn.sendMessage(m.chat, { video: { url: dataRET.response.link }, fileName: `${Date.now()}.mp4`, mimetype: 'video/mp4', caption: `╭━❰  ${wm}  ❱━⬣\n┃ 💜 ${mid.smsYT1}\n╰━━━━━❰ *𓃠 ${vs}* ❱━━━━⬣}` }, { quoted: m })
} catch {
} 
}} catch {
handler.limit = 0
}}
handler.command = ['play', 'play2']
handler.exp = 500
handler.limit = 0
export default handler

async function search(query, options = {}) {
const search = await yts.search({ query, hl: "es", gl: "ES", ...options });
return search.videos};

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = "$1.";
let arr = number.toString().split(".");
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join(".") : arr[0]};

function secondString(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " día, " : " días, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " horas, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " minutos, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " segundos") : "";
return dDisplay + hDisplay + mDisplay + sDisplay};

function bytesToSize(bytes) {
return new Promise((resolve, reject) => {
const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
if (bytes === 0) return 'n/a';
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
if (i === 0) resolve(`${bytes} ${sizes[i]}`);
resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`)})};

async function ytMp3(url) {
return new Promise((resolve, reject) => {
ytdl.getInfo(url).then(async(getUrl) => {
let result = [];
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i];
if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
let { contentLength } = item;
let bytes = await bytesToSize(contentLength);
result[i] = { audio: item.url, size: bytes }}};
let resultFix = result.filter(x => x.audio != undefined && x.size != undefined) 
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
let tinyUrl = tiny.data;
let title = getUrl.videoDetails.title;
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({ title, result: tinyUrl, result2: resultFix, thumb })}).catch(reject)})};

async function ytMp4(url) {
return new Promise(async(resolve, reject) => {
ytdl.getInfo(url).then(async(getUrl) => {
let result = [];
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i];
if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
let { qualityLabel, contentLength } = item;
let bytes = await bytesToSize(contentLength);
result[i] = { video: item.url, quality: qualityLabel, size: bytes }}};
let resultFix = result.filter(x => x.video != undefined && x.size != undefined && x.quality != undefined) 
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
let tinyUrl = tiny.data;
let title = getUrl.videoDetails.title;
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({ title, result: tinyUrl, rersult2: resultFix[0].video, thumb })}).catch(reject)})};

async function ytPlay(query) {
return new Promise((resolve, reject) => {
yts(query).then(async(getData) => {
let result = getData.videos.slice( 0, 5 );
let url = [];
for (let i = 0; i < result.length; i++) { url.push(result[i].url) }
let random = url[0];
let getAudio = await ytMp3(random);
resolve(getAudio)}).catch(reject)})};

async function ytPlayVid(query) {
return new Promise((resolve, reject) => {
yts(query).then(async(getData) => {
let result = getData.videos.slice( 0, 5 );
let url = [];
for (let i = 0; i < result.length; i++) { url.push(result[i].url) }
let random = url[0];
let getVideo = await ytMp4(random);
resolve(getVideo)}).catch(reject)})};
        
