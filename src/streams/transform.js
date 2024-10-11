import {stdin,stdout} from "node:process"
import {Transform} from "node:stream"

const transform = async () => {
  stdin.pipe(new Transform({transform(ch,enc,cb) {cb(null, (''+ch).split('').reverse().join(''))}})).pipe(stdout)
};

await transform();

/*
*
* implement function that reads data from process.stdin,
* reverses text using Transform Stream
* and then writes it into process.stdout
*
*/