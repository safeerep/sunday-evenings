// promise - represents a single future value or error.
// observables = represents a stream of values or events over time.

// promise - simple example 
const firstPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("helloo safeer from promise")
        }, 2000)
    })
}

firstPromise().then((greet: string | unknown) => {
    console.log(greet)
})

// observables - simple example
import { Observable, Observer } from "rxjs"
const observable = new Observable((subscriber) => {
    // we are sending responses as stream of values, with next
    // upto the time when we will send subsriber.complete it will waits;
    subscriber.next("safeer as first value")
    subscriber.next("ep as second value")

    // if we have do some async operations
    setTimeout(() => {
        subscriber.next("masterpadi as third value after 2 seconds")
        // here we are ending the stream;
        subscriber.complete()
    }, 2000)
})

// observable.subscribe method returns 3 callbacks 
// first one is the streams that we send from observables by using observable.next() method
// second one is error callback
// third one will be called on the eventual completion of observables;
const observer: Observer<unknown> = {
    // first callback
    next: (value: string | unknown) => {
        console.log(`got the value, ${value} and waiting for an end or next`);
    },
    // second callback
    error: (error) => {
        console.log(`an error happened during observables call ${error}`);
    },
    // third callback
    complete: () => {
        console.log(`now observables are completed`)
    }
}
observable.subscribe(observer)