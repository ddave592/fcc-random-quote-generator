import React from 'react';
import twitterIcon from '../icons/twitter-social-circle-color.png';

// pass through error interaction when run out of quotes

export const QuoteBox = (props) => {
  const classes = props.cName
    ? 'quote-card ' + props.cName
    : 'quote-card';

  if (props.buttons) {
    return (<div className={classes} id="quote-box">
      <blockquote>
        <p id='text'>
          {props.quote.quoteText}
        </p>
        <footer id="author">
          <em>
            {'- ' + props.quote.quoteAuthor}
          </em>
        </footer>
      </blockquote>
      <div className="button-group">
        <button id='new-quote' className='btn-outline btn-0' onClick={props.onClick}>New Quote!</button>
        <a
          className='tweet'
          href={`https://www.twitter.com/intent/tweet?text='${props.quote.quoteText.split(' ').reduce((previous, current) => previous + '+' + current)}'%20${'- ' + props.quote.quoteAuthor}`}
          id='tweet-quote'>
          <span className="tweet-text">
            Tweet it
          </span>
          <img width="35px" alt="Twitter Icon" src={twitterIcon} />
        </a>
      </div>
    </div>);
  } else {
    return (<div className={classes} id="quote-box">
      <blockquote>
        <p id='text'>
          {props.quote.quoteText}
        </p>
        <footer id="author">
          <em>
            {'- ' + props.quote.quoteAuthor}
          </em>
        </footer>
      </blockquote>
      <div className="button-group">
      </div>
    </div>)
  }
};
