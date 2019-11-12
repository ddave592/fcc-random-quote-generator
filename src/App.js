import React, { useState, useEffect } from 'react';
import './styles/index.scss';
import ReactFCCtest from 'react-fcctest';
import getQuote from './utils/quoteHandler';
import twitterIcon from './icons/twitter-social-circle-color.png';

console.log(getQuote().quoteText);

const QuoteBox = (props) => {

  return (
    <>
      <nav className=" nav navbar-expand-lg navbar-light mx-auto  bg-primary skew">
        <span className="navbar-brand text-primary mx-auto my-2 h1">Quote Generator</span>
      </nav>

      <div id="quote-box">
        <blockquote>
          <p id='text'>
            {props.quote}
          </p>
          <footer id="author">
            {props.author}
          </footer>
        </blockquote>
        <button id='new-quote' className='btn-primary' onClick={props.onClick}>New Quote!</button>
        <a href={`https://www.twitter.com/intent/tweet?text='${props.quote.split(' ').reduce((previous, current) => previous + '+' + current)}' - ${props.author}`} id='tweet-quote'><img width="35px" src={twitterIcon} /></a>
      </div>
    </>
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


  const handleClick = () => {
    let quoteObj = getQuote();
    setQuote(
      quoteObj.quoteText
    );
    setQuoteAuthor(
      quoteObj.quoteAuthor
    );
  }

  console.log(quote);
  return (
    <>
      <ReactFCCtest />
      <QuoteBox id='quote-box' quote={quote} author={quoteAuthor} onClick={handleClick} />
    </>
  );
}

export default App;
