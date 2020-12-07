console.log("don't die")

// class Traveler {
//     constructor(name) {
//         this.name = name;
//         this.food = 1;
//         this.isHealthy = true;
//     }
//     hunt() {
//         this.food += 2;
//     }
//     eat() {
//         if (this.food > 0) {
//             this.food -= 1;
//         } else if (this.food <= 0) {
//             this.isHealthy = false;
//         }
//     }
// }

// class Wagon {
//     constructor(capacity) {
//         this.capacity = capacity;
//         this.passengers = [];
//     }
//     getAvailableSeatCount() {
//         let newCapacity = this.capacity - this.passengers.length;
//         return newCapacity;
//     }
//     join(traveler) {
//         // console.log(this.capacity > this.passengers.length)
//         console.log("capacity " + this.capacity)
//         console.log("passengers " +this.passengers.length)
//         if (this.getAvailableSeatCount() > 0) {
//             this.passengers.push(traveler)
//         }
//         console.log(this.passengers)
//     }
//     shouldQuarantine() {
//         for (let i = 0; i <= this.passengers.length; i++) {
//             if (this.passengers[i].isHealthy === false) {
//                 return true;
//             }
//             console.log(this.passengers[i])
//         }
//         return false

//     }
//     totalFood() {
//         let totalFood = 0;
//         let i = 0;
        
//         while (i < this.passengers.length) {
//             console.log(this.passengers[i].food)
//             totalFood = totalFood + this.passengers[i].food;
//             i++
//         }
//         return totalFood;

//     }
// }

// console.log(this.passengers[i].food)
// console.log(passengers.length)


class Traveler {
    constructor(n) {
        this.name = n;
        this.food = 1;
        this.isHealthy = true;
    }
    hunt() {
        this.food += 2;
    }
    eat() {
        if (this.food > 0) {
            this.food -= 1;
        } else {
            this.isHealthy = false;
        }
    }
}

class Wagon {
    constructor (capacity) {
        this.seats = capacity;
        this.passengers = [];
    }
    getAvailableSeatCount() {
        let numSeats = 0;
        numSeats = this.seats - this.passengers.length;
        return numSeats
    }
    join(traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler)
        }
    }
    shouldQuarantine() {
        for (let i = 0; i < this.passengers.length  ;i++) {
            if (this.passengers[i].isHealthy === false) {
                return true;
            }
        }
        return false;
    }
    totalFood() {
        let numFood = 0;
        for (let i = 0; i < this.passengers.length  ;i++) {
           numFood += this.passengers[i].food;
        }
        return numFood;
    }
}

