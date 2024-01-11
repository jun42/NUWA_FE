import useBoundStore from '../../store/store';

const Header = () => {
  const bearPopulation = useBoundStore((state) => state.bears);
  return <div>Header d{bearPopulation}</div>;
};

export default Header;
