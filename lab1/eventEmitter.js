import { EventEmitter } from "node:events";
const task = new EventEmitter();

const sayHi = (name) => {
  console.log(`Logged In ${name}`);
};

const starts = () => {
  console.log("System Started");
};

task.once("greet", starts);
task.on("greet", sayHi); //event method
task.on("greet", (name) => {
  console.log(`${name} starts shopping`);
});

task.on("greet", (name) => {
  console.log(`${name} logged out`);
});

task.emit("greet", "Anshika"); //Announcement
task.emit("greet", "Palak");
task.emit("greet", "Mahi");

eventemitter;
