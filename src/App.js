import React, { useState, useEffect } from 'react';
import './styles/index.scss';
import getQuote from './utils/quoteHandler';
import { QuoteBox } from './components/QuoteBox';

const App = () => {

  const [quote, setQuote] = useState({ quoteText: 'Loading...', quoteAuthor: 'Loading...' });
  const [pastQuote, setPastQuote] = useState([]);

  useEffect(() => {
    let quoteObj = getQuote();
    if (!quoteObj.quoteAuthor) {
      quoteObj.quoteAuthor = 'Unknown'
    };
    setQuote(quoteObj);
  }, []);


  const handleClick = () => {
    let quoteObj = getQuote();
    setPastQuote([...pastQuote, {...quote}]
    );
    if (!quoteObj.quoteAuthor) {
      quoteObj.quoteAuthor = 'Unknown'
    };
    setQuote(
      quoteObj
    );
  }


//       to-dos:
// - add transition animations to new main-quote-container components + make current-quote unmount and have new one mount to control transitions
// - have history components animate down as new ones are added to array
// restructure div containers

  return (
    <>
      <nav>
        <div className="title-container">
          <h1 className="title">Quote Generator.</h1>
        </div>
      </nav>

      <div className='main-quote-container'>
        <div className='current-quote-container'>
          <QuoteBox id='quote-box' quote={quote} onClick={handleClick} buttons={true} />
        </div>
        <div className='history-quote-container'>
          <h2 className='history-title'>
            Past Quotes:
        </h2>
          {pastQuote ? [...pastQuote].reverse().map((x) => <QuoteBox cName='past-quote' key={x.id} quote={x} buttons={false} />) : null}
        </div>
      </div>
    </>
  );
}

export default App;
