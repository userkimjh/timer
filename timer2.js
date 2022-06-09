const timer2 = function(input) {
  if (input === 'b') {
    process.stdout.write('hello\n');
  }
  if (Number(input)) {
    process.stdout.write(`setting timer for ${input} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('working\n');
    }, Number(input) * 1000)
  }
  if (input === '\u0003') {
    process.stdout.write('Thanks for using me, ciao!\n');
    process.exit();
  }
}

let stdin = process.stdin; 
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (input) => {
  timer2(input);
})