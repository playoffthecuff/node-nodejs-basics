import path from "node:path";
import fs from "node:fs";

const copy = async () => {
  const eMsg = "FS operation failed";

  const src = path.join(import.meta.dirname, "files");
  const dest = path.resolve(import.meta.dirname, "files_copy");

  fs.access(src, fs.constants.F_OK, e => {if (e) throw new Error(eMsg)})
  fs.access(dest, fs.constants.F_OK, e => {if (!e) throw new Error(eMsg)})
  
  fs.cp(src, dest, {recursive: true}, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("folder copied successfully");
    }
  });
};

await copy();

/*
 * implement function that copies folder files files with all its content
 * into folder files_copy at the same level
 * (if files folder doesn't exists or files_copy has already been created
 * Error with message FS operation failed must be thrown)
 */
