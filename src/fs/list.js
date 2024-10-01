import path from "node:path";
import fs from "node:fs";

const list = async () => {
  const eMsg = "FS operation failed";

  const dir = path.resolve("files");

  fs.access(dir, fs.constants.F_OK, (e) => {
    if (e) {
      throw new Error(eMsg);
    } else {
      fs.readdir(dir, (e,f) => {if (!e) console.log(f)})
    }
  });


};

await list();

/*
 *
 * implement function that prints all array of filenames from files folder into console
 * (if files folder doesn't exists Error with message FS operation failed must be thrown)
 *
 */
