import PropTypes from 'prop-types';
import { TitleEl } from './Title.styled';

const Title = ({ title }) => {
  return <TitleEl>{title}</TitleEl>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
