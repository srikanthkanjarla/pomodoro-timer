import React from 'react';
import PropTypes from 'prop-types';
import breakTimeQuotes from './BreakTimeQuotes';
import getJSONP, { callbackMethodName } from './QuotesAPI';
import './Quotes.css';

let randomBreakTimeQuote = '';

// Quotes component
class Quotes extends React.Component {
  componentDidMount() {
    getJSONP();
  }

  render() {
    const { isBreakTime, quoteText, quoteAuthor, secondsElapsed, updateQuote } = this.props;
    // JSONP callback function
    window[callbackMethodName] = data => {
      updateQuote({ text: data.quoteText, author: data.quoteAuthor });
    };
    // get a new quote after the break time
    if (secondsElapsed === 0 && isBreakTime) {
      getJSONP();
      // random key to read a quote from BreakTimeQuotes
      randomBreakTimeQuote = breakTimeQuotes[Math.floor(Math.random() * breakTimeQuotes.length)];
    }

    return (
      <div className="quote-container">
        {isBreakTime ? (
          <h2>{randomBreakTimeQuote}</h2>
        ) : (
          <div>
            <p className="quote-text">{quoteText}</p>
            <p className="quote-author">{quoteAuthor}</p>
          </div>
        )}
      </div>
    );
  }
}
Quotes.propTypes = {
  isBreakTime: PropTypes.bool.isRequired,
  quoteText: PropTypes.string.isRequired,
  quoteAuthor: PropTypes.string.isRequired,
  secondsElapsed: PropTypes.number.isRequired,
  updateQuote: PropTypes.func.isRequired,
};
export default Quotes;
