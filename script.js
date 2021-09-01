const quote = document.getElementById('quote');
const author = document.getElementById('author');
const newQuote = document.getElementById('new-quote');

console.log(quote.innerText);
let apiQuotes = [];

// Get Quotes From API
async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();

    const randomNumber = function () {
      return Math.floor(Math.random() * apiQuotes.length - 1) + 1;
    };

    quote.innerHTML = apiQuotes[randomNumber()].text;
    author.innerHTML = apiQuotes[randomNumber()].author;

    newQuote.addEventListener('click', function () {
      quote.innerHTML = apiQuotes[randomNumber()].text;
      author.innerHTML = apiQuotes[randomNumber()].author;
    });
    apiQuotes.length;
  } catch (error) {
    //    Carch Error Here
  }
}

// On Load
getQuotes();
