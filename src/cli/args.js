const parseArgs = () => {
  console.log(process.argv.slice(2).reduce((a,v, i) => a + (i & 1 ? ' is ' + v + ', ' : v.slice(2)), '').slice(0, -2))
};

parseArgs();

/*
*
* implement function that parses command line arguments
* (given in format --propName value --prop2Name value2, you don't need to validate it)
* and prints them to the console in the format propName is value, prop2Name is value2
*
*/