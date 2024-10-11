const parseEnv = () => {
  console.log(Object.entries(process.env).filter(([k]) => k.startsWith('RSS_')).map(([k,v]) => k + '=' + v).join('; '))
};

parseEnv();

/*
*
* implement function that parses environment variables with prefix RSS_
* and prints them to the console in the format RSS_name1=value1; RSS_name2=value2
*
*/