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

const logDBConnection = (data = null) => {
  console.log("DB connected " + data);
};

myEmitter.addListener("once", () => {
  console.log("DB connected ");
});

myEmitter.prependListener("once", () => {
  console.log("prepend");
});
myEmitter.emit("once", "data for once");

myEmitter.addListener("error", (err) => {
  console.log("Error is invoke " + err.message);
});

myEmitter.emit("error", new Error("Boom!"))
