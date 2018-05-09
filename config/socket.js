const debug = require("debug")("socket");

module.exports = function (server) {
  let io = require("socket.io")(server);
  
  io.on("connection", function (socket) {

  });
}