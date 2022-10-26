const net = require("net");
const readline = require("readline");

const client = net.createConnection({ port: 8000 });
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const DATA = "data";
const LINE = "line";

// rl.on("line", line => {
//   if(line === "connect"){
//     client.connect()
//   }
//   if(line === "disconnect"){
//     client.end()
//   }
// })

rl.on(LINE, (line) => {
  client.write(line);
});

client.on(DATA, (data) => {
  console.log(`Server says: ${data}`);
});

// setInterval(() => {
//   client.write("Wiggle wiggle.");
// }, 1000);

setTimeout(() => {
  client.end("goodbye!");
}, 5000);

// const eventManager = (eventName, callback) => {
//   if(eventName === "data"){
//     callback("sending data")
//   }
//   if(eventName === "end"){
//     callback("closing the connection")
//   }
// }

// eventManager("end", (data) => {
//   console.log(data)
// })

// connection.setEncoding("utf-8")
