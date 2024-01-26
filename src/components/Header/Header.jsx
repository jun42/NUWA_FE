import useBoundStore from '../../store/store';
import { Button as ChButton } from '@chakra-ui/react';

const Header = () => {
  const bearPopulation = useBoundStore((state) => state.bears);

  return (
    <>
      <div>bear population:{bearPopulation}</div>
    </>
  );
};
export default Header;
