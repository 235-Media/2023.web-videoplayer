const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname + "/public"));

io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("play", () => {
        io.emit("play");
    });

    socket.on("pause", () => {
        io.emit("pause");
    });

    socket.on("skip10", () => {
        io.emit("skip10");
    });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
