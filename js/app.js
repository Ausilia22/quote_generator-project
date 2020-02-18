//immediate invoked function expression
(function() {
  const quotes = [
    {
      quote:
        "The way to get started is to quit talking and begin doing",
      author: "Walt Disney"
    },
    {
      quote:
        "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
      author: "John Kenneth Galbraith"
    },
    {
      quote:
        "God save me from my friends. I can protect myself from my enemies.",
      author: "Claude Louis Hector de Villars "
    },
    {
      quote: "The price of anything is the amount of life you exchange for it.",
      author: "David Thoreau"
    },
    {
      quote:
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. ",
      author: "Steve Jobs"
    },
    {
      quote:
        "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      author: " Tyne Daly"
    },
    {
    quote:
    "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: " Benjamin Franklin"
    }   
  ];

  const btn = document
    .getElementById("generate-btn")
    .addEventListener("click", function() {
      // produce random number in the range of quotes items.
      // length 6;
      // last item has index 5
      //0.9 times 6 = 5.4
      //Math floor will round it down to 5. so from 0 to 5;
      let random = Math.floor(Math.random() * quotes.length);
      // display random quote
      document.getElementById("quote").textContent = quotes[random].quote;
      // display quote author
      document.querySelector(".quote-author").textContent =
        quotes[random].author;
    });
})();
