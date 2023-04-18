import PropTypes from 'prop-types';

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function Section({ title, children }) {
  return (
    <>
      <h3>{title}</h3>
      {children}
    </>
  );
}

export default Section;
