import { config } from "dotenv"
config()
import express, { Express, Request, Response } from "express";
import EventEmitter from "events";

const app: Express = express();
const emitter: EventEmitter = new EventEmitter()

// here in this route, the event will trigger
app.get('/trigger', (req: Request, res: Response) => {
    emitter.emit('pass-greetings', { message: `helloo safeer, its from the route trigger`})
    res.send({ message: "successfully triggered the event and you will get the greetings"})
})

// here in this route listens the events triggered from the route "/trigger"
// so when we are calling the "/trigger" route, that time we can see the message from this listen route.
// to understand the working, first call the "listen" route and make the listener is open to listen
// then you can call the "trigger" route to see the console is coming from listen route;
app.get('/listen', (req: Request, res: Response) => {
    emitter.on('pass-greetings', (greetings: object) => {
        console.log(`console from listening route`, greetings);
    })
    res.send({ message: `ready to listen the event`})
})

const PORT: number = Number(process.env.PORT);
app.listen(PORT)