class car{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    startEngine(){
        console.log("Engine started");
    }
    accelerate(){
        console.log("Accelerating");
    }
    brake(){
        console.log("Braking");
    }
    getDetails(){
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
    static getAverageAge(carList){
        let totalAge = 0;
        for(let car of carList){
            totalAge += car.year;
        }
        return totalAge / carList.length;
    }
}





let myobj=new  car(12,2222,3333);
console.log(myobj.startEngine(), myobj.accelerate, myobj);
