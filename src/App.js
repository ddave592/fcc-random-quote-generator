import React, { useState, useEffect } from 'react';
import './styles/index.scss';
import ReactFCCtest from 'react-fcctest';
import getQuote from './utils/quoteHandler';
import twitterIcon from './icons/twitter-social-circle-color.png';

console.log(getQuote().quoteText);

const QuoteBox = (props) => {

  return (
    <>
      <nav>
        <h1 className="title">Quote Generator.</h1>
      </nav>

      <div className="quote-card" id="quote-box">
        <blockquote>
          <p id='text'>
            {props.quote}
          </p>
          <footer id="author">
            <em>
            {props.author}
            </em>
          </footer>
        </blockquote>
        <div className="button-group">
          <button id='new-quote' className='btn-outline' onClick={props.onClick}>New Quote!</button>
          <a className='tweet' href={`https://www.twitter.com/intent/tweet?text='${props.quote.split(' ').reduce((previous, current) => previous + '+' + current)}'%20${props.author}`} id='tweet-quote'><img width="35px" src={twitterIcon} /></a>
        </div>
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
      '- ' + quoteObj.quoteAuthor
    );
  }, []);


  const handleClick = () => {
    let quoteObj = getQuote();
    if (!quoteObj.quoteAuthor) {
      quoteObj.quoteAuthor = 'Unknown'
    };
    setQuote(
      quoteObj.quoteText
    );
    setQuoteAuthor(
      '- ' + quoteObj.quoteAuthor
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
