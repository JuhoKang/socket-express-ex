module.exports = function (socket) {

  socket.on("hello", (data) => {
    console.log(data);
  });

}