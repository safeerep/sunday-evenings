// import  from "worker_threads";
const { parentPort, workerData } =require('worker_threads')

console.log('in worker');
const digit = workerData.digit

const toCalculate = () => {
    let sum = 0;
    for (let i = 0; i < digit; i++) {
        sum += i;
    }
    return sum
}
const sum = toCalculate()
parentPort?.postMessage(sum)