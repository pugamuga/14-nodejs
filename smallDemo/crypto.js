const crypto = require("crypto");
const OS = require("os")

console.log(OS.cpus().length)

process.env.UV_THREADPOOL_SIZE = OS.cpus().length

console.log(process.env.UV_THREADPOOL_SIZE)

const start = performance.now();

// console.log(process.env.UV_THREADPOOL_SIZE)

for (let i = 0; i < 16; i++) {
  crypto.pbkdf2("test", "salt", 1000000, 64, "sha256", () => {
    console.log(performance.now() - start);
  });
}
