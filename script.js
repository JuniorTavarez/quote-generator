const quoteContainer = document.getElementById('quote-Container');
const quoteText = document.getElementById('quote');
const author = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const twitter = document.getElementById('twitter');

let apiQuotes = [];

const newQuote = function () {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  quoteText.innerText = quote.text;
  author.innerText = quote.author ? quote.author : 'Unknown';

  newQuoteBtn.addEventListener('click', newQuote);
};

// Get Quotes From API
async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    //    Carch Error Here
  }
}

// On Load
getQuotes();
// newQuote();
