import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const LinkButton = ({ toPath, buttonText, ...props }) => {
  return (
    <Link to={toPath}>
      <Button {...props}>{buttonText}</Button>
    </Link>
  );
};

export default LinkButton;
