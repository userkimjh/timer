const argv = process.argv;
argv.forEach((input)=> {
  if (!isNaN(input) && input >= 0) {
    setTimeout(() => {
      process.stdout.write(input)
    }, input*1000)
  }
});