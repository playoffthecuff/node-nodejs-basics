import {createWriteStream} from "node:fs"
import {stdin} from "node:process"
import {resolve} from "node:path"

const write = async () => {
  stdin.pipe(createWriteStream(resolve('files/fileToWrite.txt')))
};

await write();

/*
*
* write.js - implement function that writes process.stdin data
* into file fileToWrite.txt content using Writable Stream
*
*/