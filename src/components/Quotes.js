import React from 'react';
import PropTypes from 'prop-types';
import './Quotes.css';

function Quotes(props) {
  const { isBreakTime, quoteText, quoteAuthor } = props;
  const quoteStyle = {
    color: '#3066be',
  };

  return (
    <div className="quote" style={isBreakTime ? quoteStyle : {}}>
      {isBreakTime ? (
        <h2>It&apos;s ok to take a break</h2>
      ) : (
        <div>
          <p>{quoteText}</p>
          <span style={{ color: '#a0099f', fontWeight: 'bold' }}>{quoteAuthor}</span>
        </div>
      )}
    </div>
  );
}
Quotes.propTypes = {
  isBreakTime: PropTypes.bool.isRequired,
  quoteText: PropTypes.string.isRequired,
  quoteAuthor: PropTypes.string.isRequired,
};
export default Quotes;
