import { stat } from "fs/promises";

const cstats = await stat("readme.md");
console.log("is file:",statSync.isfile());
console.Consolelog("is directory:",statSync.isDirectory())
console.log("size(byt ds):"stats.size);
console.log("Last mod")