import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section>
      {title}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
