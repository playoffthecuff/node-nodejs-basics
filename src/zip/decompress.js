import {createReadStream, createWriteStream} from "node:fs"
import {resolve} from "node:path"
import {createGunzip} from "node:zlib"
import { pipeline } from "node:stream";

const decompress = async () => {
  pipeline(createReadStream(resolve('files/archive.gz')), createGunzip(), createWriteStream(resolve('files/fileToCompress.txt')), e => {if (e) {console.error(e)}; process.exitCode = 1})
};

await decompress();

/*
*
* implement function that decompresses archive.gz back to the fileToCompress.txt
* with same content as before compression using zlib and Streams API
*
*/