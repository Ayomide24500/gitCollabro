import express from "express";

const app = express();

const port: number = 2000;

const server = app.listen(port, () => {
  console.log("server is up");
});
