import React, { useState, useEffect } from 'react';
import './styles/App.scss';
import ReactFCCtest from 'react-fcctest';
import getQuote from './utils/quoteHandler'



const QuoteBox = (props) => {

  const handleClick = () => {
    props.quote = getQuote();
  }

  return (
    <div id="quote-box">

      <blockquote className='blockquote'>
        <p id='text'>
          {props.quote}
        </p>
        <footer className='blockquote-footer' id="author">

        </footer>
      </blockquote>
      <button id='new-quote' className='btn btn-primary' onClick={handleClick}>New Quote!</button>
      <button id='tweet-quote'></button>
    </div>
  );
}


const App = () => {
console.log(getQuote());
  const [quote, setQuote] = useState(getQuote());

  useEffect(() => {
    setQuote(
      getQuote());
  }, []);


  console.log(quote);
  return (
    <>
      <ReactFCCtest />
      <QuoteBox id='quote-box' quote={quote} />
    </>
  );
}

export default App;
