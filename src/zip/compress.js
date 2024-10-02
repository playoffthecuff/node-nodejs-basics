import fs from "node:fs"
import path from "node:path"
import {createGzip} from "node:zlib"
import {pipeline} from "node:stream"

const compress = async () => {
  pipeline(fs.createReadStream(path
    .resolve('files/fileToCompress.txt')), createGzip(), fs.createWriteStream(path.resolve('files/archive.gz')),
    (e) => {if (e) {console.error(e); process.exitCode = 1}})
};

await compress();

/*
*
* implement function that compresses file fileToCompress.txt
* to archive.gz using zlib and Streams API
*
*/