import process from "node:process"
import fs from "node:fs"
import path from "node:path"

const read = async () => {
  const dir = path.resolve("files")
  const src = path.join(dir, "fileToRead.txt")

  const input = fs.createReadStream(src)
  input.pipe(process.stdout)
};

await read();

/*
 * implement function that reads file fileToRead.txt content
 * using Readable Stream and prints it's content into process.stdout
 *
 */
