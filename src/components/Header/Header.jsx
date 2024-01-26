import styled from 'styled-components';
import useBoundStore from '../../store/store';

const Header = () => {
  const bearPopulation = useBoundStore((state) => state.bears);

  return (
    <>
      <div>bear population:{bearPopulation}</div>
    </>
  );
};
export default Header;
