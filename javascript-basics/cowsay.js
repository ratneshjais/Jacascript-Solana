const cowsay = require("cowsay");
const quote = require("inspirational-quotes");

const quotesay = quote.getQuote().text;
console.log(quotesay);

console.log(
  cowsay.say({
    text : "mooooooooooooooooo",
    e : "xx",
    T : "U"
  })
);
console.log(
  cowsay.say({
    text : quotesay,
    e : "xx",
    T : "U"
  })
);
