module.exports = function (socket) {

  socket.on("hello", (data) => {
    console.log(data);
    socket.emit("serverHello", `Hi this is server + ${new Date()}`);
  });

}