import React from 'react';
import PropTypes from 'prop-types';
import './Quotes.css';

function Quotes(props) {
  const { isBreakTime, quoteText } = props;
  const quoteStyle = {
    color: '#3066be',
  };

  return (
    <div className="quote" style={isBreakTime ? quoteStyle : {}}>
      {isBreakTime ? <h2>It&apos;s ok to take a break</h2> : <p>{quoteText}</p>}
    </div>
  );
}
Quotes.propTypes = {
  isBreakTime: PropTypes.bool.isRequired,
  quoteText: PropTypes.string.isRequired,
};
export default Quotes;
