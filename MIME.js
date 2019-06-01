const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.
const table = {};

for (let i = 0; i < N; i++) {
  var inputs = readline().split(" ");
  const EXT = inputs[0].toLowerCase(); // file extension
  const MT = inputs[1]; // MIME type.
  table[EXT] = MT;
}
for (let i = 0; i < Q; i++) {
  const FNAME = readline(); // One file name per line.
  const fNameSplit = FNAME.split("."); // Split FNAME, [0] = filename [1] = Extension
  const extension = fNameSplit[fNameSplit.length - 1].toLowerCase();
  console.error("FNAME: ", FNAME);
  if (table[extension] && fNameSplit.length > 1) {
    console.log(table[extension]);
  } else {
    console.log("UNKNOWN");
  }
}

console.error(table);
