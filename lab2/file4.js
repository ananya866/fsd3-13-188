import {mkdir} from 'fs/promises';

//await mkdir('upload')
//console.log("folder created");
await mkrid("upload/resume");
console.log("resume created under upload folder");
await mkdir("image/profile/logos", { recursive: true});
console.log("alll folder created");
await rm("upload",{ recursive:true});
