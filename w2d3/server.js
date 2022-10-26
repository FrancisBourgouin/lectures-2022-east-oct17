// Build a server!

// const date = new Date()
// const date = new Error()

const newArray = new Array();
const otherLinkToNewArray = newArray;

const net = require("net");
const DATA = "data";

const listOfConnections = [];

const server = net.createServer((connection) => {
  const logToServerConsole = (data) => console.log(data);
  const talkToClient = (data) => connection.write(data);
  const talkToSpecificClient = (connection, data) => connection.write(data);
  const parrot = (data) => {
    logToServerConsole(data);
    talkToClient(`🦜: ${data}`);
  };

  const broadcast = (data) => {
    logToServerConsole(data);
    for (const client of listOfConnections) {
      if (client !== connection) {
        talkToSpecificClient(client, `📣 : ${data}`);
      }
    }
  };

  listOfConnections.push(connection);
  // Sets the encoding so that we can see actual text instead of garbage (buffer)
  connection.setEncoding("utf-8");

  logToServerConsole(
    `A new client appeared!, ${listOfConnections.length} online connections`
  );

  talkToClient("Hello!");

  connection.on(DATA, broadcast);
});

server.listen(8000);

// ASCII - ANSI - UTF-8
