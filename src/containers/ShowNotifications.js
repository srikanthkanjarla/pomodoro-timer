import { connect } from 'react-redux';
import { removeNotification } from '../actions';
import Notification from '../components/Todo/Notification';

const mapStateToProps = state => ({
  removeNotification: state.todo.removeNotification,
  notifications: state.todo.notifications,
});

const mapDispatchToProps = dispatch => ({
  removeNotification: id => dispatch(removeNotification(id)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification);
