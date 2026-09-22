import { readFile, writeFile, appendFile } from "fs/promises";
const writeData = async (fname, content) => {
  await writeFile(fname, content);
  console.log("File written");
};
const readData = async (fname) => {
  const data = await readFile(fname, "utf-8");
  console.log("File contents");
  console.log(data);
};
const appendData = async (fname, content) => {
  await appendFile(fname, "\n"+ content);
};
await writeData("happy.txt", "I am very happy");
await readData("happy.txt");
await appendData("happy.txt", "FSD is interesting");
await readData("happy.txt");
