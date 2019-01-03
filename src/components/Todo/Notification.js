import React from 'react';
import PropTypes from 'prop-types';
import './notification.css';

let timeOutId;
function Notifications(props) {
  const { removeNotification, notifications } = props;
  if (!notifications.length) {
    clearTimeout(timeOutId);
  }
  return (
    <div className="notifications">
      {notifications.map(item => {
        // remove notification after 4 seconds
        timeOutId = setTimeout(() => {
          removeNotification(item.id);
        }, 4000);
        // return notification message to render
        return (
          <p key={item.id} className="show-msg">
            {item.text}
          </p>
        );
      })}
    </div>
  );
}
Notifications.propTypes = {
  removeNotification: PropTypes.func.isRequired,
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Notifications;
