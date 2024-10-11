import {createReadStream, createWriteStream} from "node:fs"
import {join} from "node:path"
import {createGunzip} from "node:zlib"
import { pipeline } from "node:stream";

const decompress = async () => {
  pipeline(createReadStream(join(import.meta.dirname, 'files/archive.gz')), createGunzip(), createWriteStream(join(import.meta.dirname, 'files/fileToCompress.txt')), e => {if (e) {console.error(e)}; process.exitCode = 1})
};

await decompress();

/*
*
* implement function that decompresses archive.gz back to the fileToCompress.txt
* with same content as before compression using zlib and Streams API
*
*/