import fs from "node:fs";
import path from "node:path";

const read = async () => {
  const eMsg = "FS operation failed";

  const dir = path.resolve("files");
  const src = path.join(dir, "fileToRead.txt");

  if (!fs.existsSync(src)) throw new Error(eMsg);

  fs.readFile(src, 'utf8', (e,d) => {
    if (e) {
      console.error(e)
    } else {
      console.log(d)
    }
  })
};

await read();

/*
 *
 * implement function that prints content of the fileToRead.txt into console
 * (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)
 *
 */
