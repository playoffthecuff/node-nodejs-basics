import {Worker} from "node:worker_threads"
import {resolve} from "node:path"
import {availableParallelism} from "node:os"

const performCalculations = async () => {
  const cores = availableParallelism()
  let start = 10
  const workers = Array
    .from(Array(cores), _ => new Worker(resolve('worker.js'), {workerData: start++}))
  const promises = workers
    .map(w => new Promise((res, rej) => {
      w.on('message', v => res({status: 'resolved', data: v}))
      w.on('error', e => res({status: 'rejected', data: null}))
    }))
  Promise.all(promises).then(console.log)
};

await performCalculations();