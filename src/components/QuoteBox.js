import React from 'react';
import twitterIcon from '../icons/twitter-social-circle-color.png';



export const QuoteBox = (props) => {
  return (<div className={"quote-card " + props.cName} id="quote-box">
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
      <a className='tweet'  href={`https://www.twitter.com/intent/tweet?text='${props.quote.quoteText.split(' ').reduce((previous, current) => previous + '+' + current)}'%20${'- ' + props.quote.quoteAuthor}`} id='tweet-quote'>
      <span class="tweet-text">
        Tweet it
      </span>
        <img width="35px" alt="Twitter Icon" src={twitterIcon} />
        </a>
    </div>
  </div>);
};
