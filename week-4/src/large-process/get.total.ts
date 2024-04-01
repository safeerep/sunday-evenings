console.log('in child');

const countTotal = (num: number):number => {
    let totalAmount: number = 0;
    for (let i: number = 0; i < num; i++) {
        totalAmount += i;
    }
    return totalAmount;
}

process.on("message", (data: any) => {
    console.log(`message got from parent`, data.message);
    
    const totalAmount: number = countTotal(data?.digit)
    const obj = {
        message: "calculation successfull",
        result: totalAmount
    }
    process?.send?.(obj)
})