import {createWriteStream} from "node:fs"
import {stdin} from "node:process"
import {join} from "node:path"

const write = async () => {
  stdin.pipe(createWriteStream(join(import.meta.dirname, 'files/fileToWrite.txt')))
};

await write();

/*
*
* write.js - implement function that writes process.stdin data
* into file fileToWrite.txt content using Writable Stream
*
*/