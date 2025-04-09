import express, { Request, Response } from "express";

const app = express();
app.get("/", (request: Request, response: Response) => {
  response.send("Hello, Typescript with Express");
});

const port = 3880;

app.listen(port, () => console.log(`Server running on port ${port}`));
