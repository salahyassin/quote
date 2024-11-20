let quotePara = document.getElementById("quote")
let authorPara = document.getElementById("author");
let newQuoteBtn = document.getElementById("new-quote")

const quotes=[
    {
        quote:'“Be yourself; everyone else is already taken.”',
        author:'― Oscar Wilde'
    },
    {
        quote:'“So many books, so little time.”',
        author:'― Frank Zappa'
    },
    {
        quote:'“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”',
        author:'― Albert Einstein'
    },
    {
        quote:'“A room without books is like a body without a soul.”',
        author:'― Marcus Tullius Cicero'
    },
    {
        quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        author:'― Bernard M. Baruch'
    },
    {
        quote:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        author:'― Dr. Seuss'
    },
    {
        quote:"“Without music, life would be a mistake.”",
        author:'― Friedrich Nietzsche'
    },
    {
        quote:"“I am so clever that sometimes I don't understand a single word of what I am saying.”",
        author:'― Oscar Wilde'
    },
    {
        quote:"“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
        author:'― Ralph Waldo Emerson'
    },
    {
        quote:"“It is better to be hated for what you are than to be loved for what you are not.”",
        author:'― Andre Gide'
    },
]
let random = 0;
let lastRandom = null;

function newQuote() {
    do {
      random = Math.floor(Math.random() * quotes.length);
    } while(random === lastRandom);
    lastRandom = random;
    quotePara.innerHTML = quotes[random].quote;
    authorPara.innerHTML = quotes[random].author;
}
newQuoteBtn.onclick=function() {newQuote()};