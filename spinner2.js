const arr = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${arr[i]}   `)
  }, 100 + (200 * i));
}
setTimeout(() => {
  process.stdout.write('\n')
}, 100 + (200 * arr.length));