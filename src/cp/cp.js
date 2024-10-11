import {fork} from 'node:child_process'
import {join} from 'node:path'
import {stdin, stdout} from 'node:process'

const spawnChildProcess = async (args) => {
  const cp = fork(join(import.meta.dirname, 'files/script.js'), args,{
    stdio: ['pipe', 'pipe', 2, 'ipc'],
  })
  
  stdin.pipe(cp.stdin)
  cp.stdout.pipe(stdout)
  
  cp.on('exit', c => console.log(`CP exit with code ${c}`))
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2']);

/*
*
* implement function spawnChildProcess that receives array of arguments args
* and creates child process from file script.js, passing these args to it.
* This function should create IPC-channel between stdin and stdout of master process and child process:
* child process stdin should receive input from master process stdin
* child process stdout should send data to master process stdout
*
*/
