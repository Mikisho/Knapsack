const fs = require('fs');

fs.readFile('data/small1.txt', function(err, data){
  if (err) {
    console.error('Could not find file')
    process.exit(1)
  }

  const datArr = data
    .toString()
    .split('\n')
    .reduce((res, item, i) =>{
      if (!item) {
        return res;
      }
      const line = item.split(' ')
      res[i] = { item: line[0], size: Number(line[1]), val: Number(line[2])}
      return res;
    }, [])
    console.log(datArr);
});