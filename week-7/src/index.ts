// The Observer Pattern is a behavioral design pattern 
// in which an object (the "subject") maintains a list of its dependents (the "observers") 
// and notifies them of state changes, typically by calling a method on each observer.

interface Observer {
    update(stock: Stock): void;
}

// the Subject class maintaining a list of observers
// we can have multiple observers according to our needs and wants;
class Stock {
    private observers: Observer[] = [];

    constructor(
        public symbol: string,
        private price: number
    ) {}

    // to add an observer to the list of observers
    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    // to remove an observer from the list of observers
    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    // to notify all observers about a change in stock price;
    private notifyObservers(): void {
        this.observers.forEach(observer => observer.update(this));
    }

    // to update the stock price and notify observers
    setPrice(newPrice: number): void {
        this.price = newPrice;
        this.notifyObservers();
    }

    // to get the current price of stock;
    getPrice( print: boolean = false): number {
        if (print) {
            console.log(this.price);
        }
        return this.price;
    }
}

class Investor implements Observer {
    constructor(public name: string) {

    }

    // it will be called by the subject to notify about changes
    update(stock: Stock): void {
        console.log(
            `${this.name} is notified. New price of ${stock.symbol} is ${stock.getPrice(false)}`
        );
    }
}

const stock1 = new Stock('stock1', 150);
const investor1 = new Investor('safeer');
const investor2 = new Investor('jabi');

// adding observers
stock1.addObserver(investor1);
stock1.addObserver(investor2);

// first we are looking the current price of stock
stock1.getPrice(true)

// changing stock price, notifying observers
stock1.setPrice(155); // safeer and jabi are notified of the new price

// removing an observer and changing stock price again
stock1.removeObserver(investor2);
stock1.setPrice(160); // only safeer is notified because jabi is already removed from the observers list;