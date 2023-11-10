import express from "express";

const app = express();

const port: number = 2000;

const server = app.listen(port, () => {
  console.log("server is up");
});

process.on("uncaughtException", (err: Error) => {
  console.log("uncaughtException", err);
  process.exit(1);
});
process.on("rejectionHandled", (reason: any) => {
  console.log("rejectionHandled", reason);

  server.close(() => {
    process.exit(1);
  });
});
