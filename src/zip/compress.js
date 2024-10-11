import fs from "node:fs"
import {join} from "node:path"
import {createGzip} from "node:zlib"
import {pipeline} from "node:stream"

const compress = async () => {
  pipeline(fs.createReadStream(join(import.meta.dirname, 'files/fileToCompress.txt')), createGzip(), fs.createWriteStream(join(import.meta.dirname, 'files/archive.gz')),
    (e) => {if (e) {console.error(e); process.exitCode = 1}})
};

await compress();

/*
*
* implement function that compresses file fileToCompress.txt
* to archive.gz using zlib and Streams API
*
*/