import React, { useState, useEffect } from 'react';
import './styles/App.scss';
import ReactFCCtest from 'react-fcctest';
import getQuote from './utils/quoteHandler'

console.log(getQuote().quoteText);

const QuoteBox = (props) => {

  const handleClick = () => {
    let quoteObj = getQuote();
    props.quote = quoteObj.quoteText;
    props.author = quoteObj.quoteAuthor;
  }

  return (
    <div id="quote-box">

      <blockquote className='blockquote'>
        <p id='text'>
          {props.quote}
        </p>
        <footer className='blockquote-footer' id="author">
          {props.author}
        </footer>
      </blockquote>
      <button id='new-quote' className='btn btn-primary' onClick={handleClick}>New Quote!</button>
      <button id='tweet-quote'></button>
    </div>
  );
}


const App = () => {
  console.log(getQuote());
  const [quote, setQuote] = useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = useState('Loading...');

  useEffect(() => {
    let quoteObj = getQuote();
    setQuote(
      quoteObj.quoteText
    );
    setQuoteAuthor(
      quoteObj.quoteAuthor
    );
  }, []);


  console.log(quote);
  return (
    <>
      <ReactFCCtest />
      <QuoteBox id='quote-box' quote={quote} author={quoteAuthor} />
    </>
  );
}

export default App;
