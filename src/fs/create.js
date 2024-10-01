import path from "node:path"
import fs from "node:fs"

const create = async () => {

  const dir = path.resolve('files')
  const targetPath = path.join(dir, 'fresh.txt')

  const content = 'I am fresh and young'
  const eMsg = 'FS operation failed'

  fs.access(targetPath, fs.constants.F_OK, e => {if (!e) throw new Error(eMsg)})

  fs.writeFile(targetPath, content, err => {
    if (err) {
      console.error(err);
    } else {
      console.log('file written successfully');
    }
  });
};

await create();

/*
 * create.js - implement function that creates new file fresh.txt with content
 * I am fresh and young inside of the files folder
 * (if file already exists Error with message FS operation failed must be thrown)
 */
