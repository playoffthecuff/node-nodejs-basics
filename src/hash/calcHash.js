import { createHash } from "node:crypto"
import fs from "node:fs"
import path from "node:path"
import process from "node:process"

const calculateHash = async () => {
  const dir = import.meta.dirname
  const src = path.join(dir, 'files/fileToCalculateHashFor.txt')

  const hash = createHash("sha256")
  const input = fs.createReadStream(src)

  input.pipe(hash).setEncoding('hex').pipe(process.stdout)
};

await calculateHash();

/*
 *
 * implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt
 * and logs it into console as hex using Streams API
 *
 */
