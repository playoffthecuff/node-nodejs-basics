import path from "node:path";
import fs from "node:fs";

const remove = async () => {
  const eMsg = "FS operation failed";

  const dir = path.resolve("files");
  const src = path.join(dir, "fileToRemove.txt");

  if (!fs.existsSync(src)) throw new Error(eMsg);

  fs.rm(src, (e) => {
    if (e) {
      console.error(e);
    } else {
      console.log("file removed successfully");
    }
  });
};

await remove();

/*
 * delete.js - implement function that deletes file fileToRemove.txt
 * (if there's no file fileToRemove.txt
 * Error with message FS operation failed must be thrown)
 */
