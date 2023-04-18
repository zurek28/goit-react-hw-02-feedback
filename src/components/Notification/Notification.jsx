import PropTypes from 'prop-types';

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

function Notification({ message }) {
  return <p>{message}</p>;
}

export default Notification;
