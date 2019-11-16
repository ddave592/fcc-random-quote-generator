import React, { useState, useEffect } from 'react';
import './styles/index.scss';
import getQuote from './utils/quoteHandler';
import { QuoteBox } from './components/QuoteBox';
import { useTrail, animated } from 'react-spring'

const App = () => {

  //init states
  const [quote, setQuote] = useState({ quoteText: 'Loading...', quoteAuthor: 'Loading...' });
  const [pastQuote, setPastQuote] = useState([]);


  //animation
  const items = ['Quote', ' Generator.']
  const config = { mass: 5, tension: 1000, friction: 100 }

  const trail = useTrail(items.length, {
    config,
    opacity: 1,
    x: 0,
    height: 80,
    from: { opacity: 0, x: 20, height: 0 },
  })


  //hooks
  useEffect(() => {
    let quoteObj = getQuote();
    if (!quoteObj.quoteAuthor) {
      quoteObj.quoteAuthor = 'Unknown'
    };
    setQuote(quoteObj);
  }, []);

//handleclick button
  const handleClick = () => {
    let quoteObj = getQuote();
    console.log(pastQuote.length);
    if (pastQuote.length < 3) {
      setPastQuote([...pastQuote, { ...quote }]
      );
    } else {
      let previousPastQuote = [...pastQuote];
      previousPastQuote.shift();
      setPastQuote([...previousPastQuote, { ...quote }]
      )
    }
    if (!quoteObj.quoteAuthor) {
      quoteObj.quoteAuthor = 'Unknown'
    };
    setQuote(
      quoteObj
    );
  }

  let historyClasses = pastQuote.length === 0 ? 'history-title' : 'history-title display'
  const pastQuoteMap = pastQuote ? [...pastQuote].reverse().map((x) => {
    return <QuoteBox cName='past-quote' key={x.id} quote={x} buttons={false} />
  }) : null;


  
  /*********   to-dos:    *********
   * 
   * - add transition animations to new main-quote-container components + make current-quote unmount and have new one mount to control transitions
   * - have history components animate down as new ones are added to array
   * - add react-springs for history components
   * 
   * 
   ***************/



  return (
    <>
      <nav>
        <div className="title-container">
          <div className="h1-container">
            {trail.map(({ x, height, ...rest }, index) => (
              <animated.h1
                className="title"
                key={items[index]}
                style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                {items[index]}
              </animated.h1>
            ))}
          </div>
        </div>
      </nav>

      <div className='main-quote-container'>
        <div className='current-quote-container'>
          <QuoteBox id='quote-box' quote={quote} onClick={handleClick} buttons={true} />
        </div>
        <div className='history-quote-container'>
          <h2 className={historyClasses}>
            Past Quotes:
        </h2>
          {pastQuoteMap}
        </div>
      </div>
    </>
  );
}

export default App;
