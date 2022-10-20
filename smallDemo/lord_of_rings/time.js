const sec = 100;
const start= performance.now()


setTimeout((data = "nothing") => {
    console.log(((performance.now() - start)/1000).toFixed(3) + " sec")
  console.log(sec / 1000 + " sec passed");
  console.log("and here my data: " + data)
}, sec);
