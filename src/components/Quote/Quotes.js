import React from 'react';
import PropTypes from 'prop-types';
import './Quotes.css';

// JSONP to get quote from API
const randomNum = Math.round(10000 * Math.random());
const callbackMethodName = `cb_${randomNum}`;
const END_POINT = 'https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=';

// JSONP function to get data from API
function getJsonp(url, callback) {
  const script = document.createElement('script');
  script.id = `script_${callbackMethodName}`;
  script.src = url + callback;
  document.body.appendChild(script);
  document.getElementById(script.id).remove();
}

getJsonp(END_POINT, callbackMethodName);

function Quotes(props) {
  const { isBreakTime, quoteText, quoteAuthor, secondsElapsed, updateQuote } = props;
  // JSONP callback function
  window[callbackMethodName] = data => {
    updateQuote({ text: data.quoteText, author: data.quoteAuthor });
  };
  // get new quote after break
  if (secondsElapsed === 0 && isBreakTime) {
    getJsonp(END_POINT, callbackMethodName);
  }
  return (
    <div className="quote-container">
      {isBreakTime ? (
        <h2>It&apos;s ok to take a break</h2>
      ) : (
        <div>
          <p className="quote-text">{quoteText}</p>
          <p className="quote-author">{quoteAuthor}</p>
        </div>
      )}
    </div>
  );
}
Quotes.propTypes = {
  isBreakTime: PropTypes.bool.isRequired,
  quoteText: PropTypes.string.isRequired,
  quoteAuthor: PropTypes.string.isRequired,
  secondsElapsed: PropTypes.number.isRequired,
  updateQuote: PropTypes.func.isRequired,
};
export default Quotes;
