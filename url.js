#!/usr/bin/env node
var fs = require('fs');
var outfile = "urls.txt";

var out = "http://github.com/eichel/bitstarters, http://serene-waters-6281.herokuapp.com\n";
fs.writeFileSync(outfile, out);

console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);


