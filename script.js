const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const author = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const twitter = document.getElementById('twitter');
const loader = document.getElementById('loader');

let apiQuotes = [];

// show Loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

const newQuote = function () {
  loading();
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  quoteText.innerText = quote.text;
  //   Check if Author field is blank and replace it with Unknown
  author.innerText = !quote.author ? 'Unknown' : quote.author;
  //   long text
  quote.text.length > 120
    ? quoteText.classList.add('long-quote')
    : //   quoteText.classList.remove('quote-text')
      quoteText.classList.remove('long-quote');
  // quoteText.classList.add('quote-text')

  complete();
};

// Get Quotes From API
async function getQuotes() {
  loading();
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    //    Carch Error Here
  }
}

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${author.textContent}`;
  window.open(twitterUrl, '_blank');
}

// Event Listeners

newQuoteBtn.addEventListener('click', newQuote);
twitter.addEventListener('click', tweetQuote);

// On Load
getQuotes();
