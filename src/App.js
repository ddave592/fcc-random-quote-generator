import React, { useState, useEffect } from 'react';
import './styles/index.scss';
import ReactFCCtest from 'react-fcctest';
import getQuote from './utils/quoteHandler';
import { QuoteBox } from './components/QuoteBox';

const App = () => {

  const [quote, setQuote] = useState({ quoteText: 'Loading...', quoteAuthor: 'Loading...' });
  // const [pastQuote, setPastQuote] = useState([]);


  // let pastQuoteArr = [{
  //   "quoteAuthor": "Thomas Edison",
  //   "quoteText": "Genius is one percent inspiration and ninety-nine percent perspiration."
  // },
  // {
  //   "quoteAuthor": "Yogi Berra",
  //   "quoteText": "You can observe a lot just by watching."
  // },
  // {
  //   "quoteAuthor": "Abraham Lincoln",
  //   "quoteText": "A house divided against itself cannot stand."
  // }]

  useEffect(() => {
    let quoteObj = getQuote();
    if (!quoteObj.quoteAuthor) {
      quoteObj.quoteAuthor = 'Unknown'
    };
    setQuote(quoteObj);
  }, []);


  const handleClick = () => {
    let quoteObj = getQuote();
    // setPastQuote(pastQuote + {
    //   'quoteText': quote.quoteText,
    //   'quoteAuthor': quote.quoteAuthor
    // });
    if (!quoteObj.quoteAuthor) {
      quoteObj.quoteAuthor = 'Unknown'
    };
    setQuote(
      quoteObj
    );
  }

  return (
    <>
      <nav>
        <div className="title-container">
          <h1 class="title">Quote Generator.</h1>
        </div>
      </nav>
      <ReactFCCtest />
      <QuoteBox id='quote-box' quote={quote} onClick={handleClick} />
      {/* {pastQuote ? [...pastQuote].map(x => <QuoteBox cName='past-quote' quote={x.quoteText} author={x.quoteAuthor} onClick={handleClick} />) : null} */}
    </>
  );
}

export default App;
