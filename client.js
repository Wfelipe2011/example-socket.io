import { io } from "socket.io-client";

const socket = io("https://localhost:3000", {});

socket.on("connect", () => {
  console.log(`connect ${socket.id}`);
});

socket.on("disconnect", () => {
  console.log(`disconnect`);
});

setInterval(() => {
  const start = Date.now();
  socket.emit("test", "ping");
}, 3000);
