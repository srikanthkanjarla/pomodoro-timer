import React from 'react';
import PropTypes from 'prop-types';
import FormattedTime from './FormattedTime';

function Clock(props) {
  const { clockTime, secondsElapsed, isBreakTime } = props;
  const time = clockTime - secondsElapsed;
  return (
    <div className={`clock${' '}${isBreakTime ? 'break' : 'session'}`}>
      <FormattedTime time={time} />
    </div>
  );
}
Clock.propTypes = {
  clockTime: PropTypes.number.isRequired,
  secondsElapsed: PropTypes.number.isRequired,
  isBreakTime: PropTypes.bool.isRequired,
};
export default Clock;
