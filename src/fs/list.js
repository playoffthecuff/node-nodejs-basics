import path from "node:path";
import fs from "node:fs";

const list = async () => {
  const eMsg = 'FS operation failed'

  const dir = path.resolve('files')

  if (!fs.existsSync(dir)) throw new Error(eMsg)

  fs.readdirSync(dir).forEach(f => console.log(f))
};

await list();

/*
 *
 * implement function that prints all array of filenames from files folder into console
 * (if files folder doesn't exists Error with message FS operation failed must be thrown)
 *
 */
