// const main = async () => {
//   try {
//     const { chars, greeting } = await import("../lord_of_rings/characters.mjs");
//     for (const person of chars) {
//       greeting(person.name);
//     }
//   } catch (error) {
//     console.log("Import path wrong")
//   }
// };

// main()

// console.log(performance)

const EventEmitter = require("events");

const myEmitter = new EventEmitter();

const logDBConnection = (data) => {
    console.log("DB connected "+data) 
}

myEmitter.addListener("once", logDBConnection)

myEmitter.emit("once", "run just once")
myEmitter.emit("once", "run just once")
myEmitter.emit("once", "run just once")


