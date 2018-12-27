import { connect } from 'react-redux';
import Quotes from '../components/Quotes';
import { updateQuote } from '../actions';

const mapStateToProps = state => ({
  quoteText: state.quote.quoteText,
  quoteAuthor: state.quote.quoteAuthor,
  isBreakTime: state.timer.isBreakTime,
  secondsElapsed: state.timer.secondsElapsed,
});

const mapDispatchToProps = dispatch => ({
  updateQuote: quote => dispatch(updateQuote(quote)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quotes);
