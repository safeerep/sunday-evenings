import { config } from "dotenv";
config();

import express, { Application, Request, Response } from "express";
const app: Application = express();

import { Worker } from "worker_threads";

app.get("/health", (req: Request, res: Response) => {
  res.send({ message: "fine health condition" });
});

app.get("/get-worker-result", async (req: Request, res: Response) => {
  const workerToCalculateSum = new Worker(
    "./src/workers/worker.to.calculate.sum.ts",
    {
      workerData: {
        digit: 10,
      },
    }
  );
  try {
    workerToCalculateSum.on("message", (result: number) => {
      let total = result;
      res.send({ message: "got result from worker", result: total });
    });
  } catch (error) {
    res.send(
        { message: "something went wrong" }
    )
  }
});

const PORT = process.env.PORT || 3007;
app.listen(PORT, () => {
  console.log(`server started successfully at port ${PORT}`);
});
