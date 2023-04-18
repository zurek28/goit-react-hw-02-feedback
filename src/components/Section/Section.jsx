import PropTypes from 'prop-types';
import css from './Section.module.css';

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function Section({ title, children }) {
  return (
    <div className={css.section}>
      <h3 className={css.title}>{title}</h3>
      {children}
    </div>
  );
}

export default Section;
