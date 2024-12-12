import { useState } from "react";

function QuotesApp() {

    const quotes = [
        {
          quote: "The only way to do great work is to love what you do.",
          author: "Steve Jobs"
        },
        {
          quote: "Success is not the key to happiness. Happiness is the key to success.",
          author: "Albert Schweitzer"
        },
        {
          quote: "Believe you can and you're halfway there.",
          author: "Theodore Roosevelt"
        },
        {
          quote: "The future belongs to those who believe in the beauty of their dreams.",
          author: "Eleanor Roosevelt"
        },
        {
          quote: "It does not matter how slowly you go as long as you do not stop.",
          author: "Confucius"
        },
        {
          quote: "The best way to predict the future is to create it.",
          author: "Abraham Lincoln"
        },
        {
          quote: "You are never too old to set another goal or to dream a new dream.",
          author: "C.S. Lewis"
        },
        {
          quote: "In the middle of every difficulty lies opportunity.",
          author: "Albert Einstein"
        },
        {
          quote: "The only limit to our realization of tomorrow is our doubts of today.",
          author: "Franklin D. Roosevelt"
        },
        {
          quote: "It always seems impossible until it’s done.",
          author: "Nelson Mandela"
        }
    ];

    const [currentQuote, setCurrentQuote] = useState(quotes[0]);

    function randomizeQuote() {
        const randomNum = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomNum]);
    }
      
    return (
        <section className="quote-section text-center py-4">
            <div className="container">
                <p className="display-1 mb-1 quotation">"</p>
                <p className="fw-bold fs-5 mb-1">{currentQuote.quote}</p>
                <p className="mb-5 fs-6">- {currentQuote.author}</p>
                <div className="quotes-line mb-5"></div>
                <button onClick={randomizeQuote} className="btn btn-primary text-capitalize">Generate quote</button>
            </div>
        </section>
    );
  }
  
  export default QuotesApp;
  