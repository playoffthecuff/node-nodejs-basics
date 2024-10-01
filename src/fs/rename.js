import path from "node:path";
import fs from "node:fs";

const rename = async () => {
  const eMsg = "FS operation failed"

  const dir = path.resolve("files")
  const src = path.join(dir, "wrongFilename.txt")
  const target = path.join(dir, "properFilename.md")

  if (!fs.existsSync(src) || fs.existsSync(target)) throw new Error(eMsg);

  fs.rename(src, target, (err) => {
    if (err) {
      console.error(err)
    } else {
      console.log('Rename complete!');
    };
  });
};

await rename();

/*
 * rename.js - implement function that renames file wrongFilename.txt
 * to properFilename with extension .md
 * (if there's no file wrongFilename.txt or properFilename.md
 * already exists Error with message FS operation failed must be thrown)
 */
