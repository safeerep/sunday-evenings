import { config } from "dotenv";
config()

import express, { Application, Request, Response } from "express";
import { fork, spawn } from "child_process";

const app: Application = express()

// nodejs is actually single threaded 
// so, some times we have to run some parallel processes to maintain non-blocking execution
// and utilizing multiple cpu cores efficiently
// we can have spawn and fork for to having child processes;
// fork is designed for to having a process which is build in node
// by using spawn we can run any other programs also (eg: python)

// fork
app.get('/fork', (req: Request, res: Response) => {
    const child = fork("src/large-process/get.total.ts")

    child.on("message", (data: any) => {
        console.log("got message from child", data?.message);
        console.log('calculation result is ', data?.result);  
    })
    
    const obj = {
        message: "its helloo from parent",
        digit: 1000
    }
    child.send(obj)

    res.send({
        "message": "ok fine"
    })
})

// spawn
app.get('/spawn', (req: Request, res: Response) => {
    console.log("child process starts now for python log");
    const pythonProcess = spawn("python", ["python/.hello.py"])

    pythonProcess.stdout.on("data", (greeting: Buffer) => {
        console.log(greeting.toString());
    })

    pythonProcess.stderr.on("data", (error: Buffer) => {
        console.log("error happened",error.toString());
    })

    pythonProcess.on("close", () => {
        console.log("spawned child closed");
    })
    res.send({"message": "success"})
})

const PORT: number = Number(process.env.PORT) || 7878;
app.listen( PORT, () => {
    console.log(`server for spawn and fork experiment started`);
})